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
  if (!reference) return { name: "Semillero", amount: 0, city: undefined };
  const parts = reference.split("|");
  return {
    name: decodeURIComponent(parts[0] || "Semillero"),
    amount: parseInt(parts[1] || "0", 10) || 0,
    city: parts[2] ? decodeURIComponent(parts[2]) : undefined,
  };
}

export { SITE };
