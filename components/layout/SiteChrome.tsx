"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const STANDALONE_PATHS = new Set<string>(["/go", "/start"]);

export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const normalizedPathname =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const standalone = STANDALONE_PATHS.has(normalizedPathname);

  if (standalone) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
