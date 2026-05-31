import { MercadoPagoConfig, Payment } from "mercadopago";
import { unstable_cache } from "next/cache";

export type Donor = {
  id: string;
  name: string;
  amount: number;
  date: string;
  city?: string;
  founder: boolean;
};

export type FundStats = {
  current: number;
  donorCount: number;
  target: number;
  phase: number;
};

const FUND_TARGET = 500000;
const FUND_PHASE = 1;

function parseExternalReference(ref: string | null | undefined) {
  if (!ref || !ref.includes("|")) return null;
  const parts = ref.split("|");
  const name = decodeURIComponent(parts[0] || "Semillero");
  const city = parts[2] ? decodeURIComponent(parts[2]) : undefined;
  return { name, city };
}

async function fetchDonorsFromMercadoPago(): Promise<Donor[]> {
  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) return [];

  try {
    const client = new MercadoPagoConfig({ accessToken });
    const payment = new Payment(client);

    const result = await payment.search({
      options: {
        criteria: "desc",
        sort: "date_created",
        status: "approved",
        range: "date_created",
        begin_date: "NOW-365DAYS",
        end_date: "NOW",
      },
    });

    const donors: Donor[] = [];
    const seen = new Set<string>();

    for (const p of result.results ?? []) {
      if (!p.id || seen.has(String(p.id))) continue;

      const parsed = parseExternalReference(p.external_reference);
      if (!parsed) continue;

      const amount = p.transaction_amount ?? 0;
      if (amount < 20) continue;

      seen.add(String(p.id));
      donors.push({
        id: String(p.id),
        name: parsed.name,
        amount,
        date: p.date_approved ?? p.date_created ?? new Date().toISOString(),
        city: parsed.city || undefined,
        founder: amount >= 500,
      });
    }

    return donors.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error fetching donors from Mercado Pago:", error);
    return [];
  }
}

export const getDonors = unstable_cache(
  fetchDonorsFromMercadoPago,
  ["donors-mp"],
  { revalidate: 120, tags: ["donors"] }
);

export async function getFundStats(): Promise<FundStats> {
  const donors = await getDonors();
  const current = donors.reduce((sum, d) => sum + d.amount, 0);

  return {
    current,
    donorCount: donors.length,
    target: FUND_TARGET,
    phase: FUND_PHASE,
  };
}

export function buildExternalReference(
  name: string,
  amount: number,
  city?: string
) {
  const cityPart = city ? `|${encodeURIComponent(city)}` : "";
  return `${encodeURIComponent(name)}|${amount}${cityPart}`;
}
