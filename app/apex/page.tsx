import { buildPageMetadata, ORG_JSON_LD } from "@/lib/seo/metadata";
import ApexClient from "./ApexClient";

export const metadata = buildPageMetadata({
  title: "APEX 1-on-1 Mentorship",
  description:
    "Private trading mentorship with direct access, real-time execution, and personal process development. Application only.",
  path: "/apex",
});

export default function ApexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
      />
      <ApexClient />
    </>
  );
}
