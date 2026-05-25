import { SITE } from "./constants";

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function parseDonorReference(reference: string | null) {
  if (!reference) return { name: "Semillero", amount: 0 };
  const [name, amountStr] = reference.split("|");
  return {
    name: decodeURIComponent(name || "Semillero"),
    amount: parseInt(amountStr || "0", 10) || 0,
  };
}

export { SITE };
