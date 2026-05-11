// Centralized pricing literals + derived values.
// Single source of truth for marketing pages, pricing cards, hero eyebrows,
// FAQ copy, and shock strips. Keep numbers in raw integers; formatting and
// derived math (annual savings, per-month equivalents, upgrade delta) is
// computed once at module load.
//
// To change a price, edit the integer constants below.

const WOLFPACK_MONTHLY = 147;
const WOLFPACK_ANNUAL = 1497;
const PRO_MONTHLY = 197;
const PRO_ANNUAL = 1997;
const LEGACY_MONTHLY = 40;
const LEGACY_ANNUAL = 399;

function formatUSD(value: number, decimals: 0 | 2 = 0): string {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

function annualSavings(monthly: number, annual: number): number {
  return monthly * 12 - annual;
}

function annualPerMonth(annual: number): number {
  return Math.round((annual / 12) * 100) / 100;
}

export const PRICING = {
  wolfpack: {
    monthlyAmount: WOLFPACK_MONTHLY,
    annualAmount: WOLFPACK_ANNUAL,
    monthly: formatUSD(WOLFPACK_MONTHLY),
    annual: formatUSD(WOLFPACK_ANNUAL),
    annualSavings: formatUSD(annualSavings(WOLFPACK_MONTHLY, WOLFPACK_ANNUAL)),
    annualPerMonth: formatUSD(annualPerMonth(WOLFPACK_ANNUAL), 2),
  },
  pro: {
    monthlyAmount: PRO_MONTHLY,
    annualAmount: PRO_ANNUAL,
    monthly: formatUSD(PRO_MONTHLY),
    annual: formatUSD(PRO_ANNUAL),
    annualSavings: formatUSD(annualSavings(PRO_MONTHLY, PRO_ANNUAL)),
    annualPerMonth: formatUSD(annualPerMonth(PRO_ANNUAL), 2),
    upgradeDelta: formatUSD(PRO_MONTHLY - WOLFPACK_MONTHLY),
  },
  legacy: {
    monthlyAmount: LEGACY_MONTHLY,
    annualAmount: LEGACY_ANNUAL,
    monthly: formatUSD(LEGACY_MONTHLY),
    annual: formatUSD(LEGACY_ANNUAL),
  },
} as const;

export const PROMO = {
  wolfpack: {
    code: "LAUNCH97",
    firstPeriodPrice: "$97",
  },
  pro: {
    code: "LAUNCH147",
    firstPeriodPrice: "$147",
  },
} as const;
