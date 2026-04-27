import Link from "next/link";

const FOOTER_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/wolfpack", label: "Wolfpack" },
  { href: "/pro", label: "Pro" },
  { href: "/apex", label: "APEX" },
  { href: "/platform", label: "Platform" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-black2">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-display text-2xl text-parchment">
              Wolf Trades
            </div>
            <p className="mt-2 max-w-xs text-sm text-gray">
              The trading operating system for serious traders.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-sm uppercase tracking-wider text-parchment/80 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-gray md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} Wolf Trades. All rights reserved.</span>
          <span>
            {/* TODO: legal links — Terms · Privacy · Disclosures */}
          </span>
        </div>
      </div>
    </footer>
  );
}
