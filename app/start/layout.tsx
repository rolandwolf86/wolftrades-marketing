import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo/metadata";

// /start is a "use client" page (it reads useSearchParams), so metadata must
// live in a server-component layout wrapper.
export const metadata = buildPageMetadata({
  title: "Start Free",
  description:
    "Create your free Wolf Trades account — Roland's daily watchlist, community preview, risk calculator, and a basic trading journal. No card required.",
  path: "/start",
});

export default function StartLayout({ children }: { children: ReactNode }) {
  return children;
}
