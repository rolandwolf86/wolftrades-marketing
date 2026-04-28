import type { Metadata } from "next";
import ApexClient from "./ApexClient";

export const metadata: Metadata = {
  title: "APEX 1-on-1 Mentorship | Wolf Trades",
  description:
    "Private trading mentorship with direct access, real-time execution, and personal process development. Application only.",
};

export default function ApexPage() {
  return <ApexClient />;
}
