"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/wolfpack", label: "Wolfpack" },
  { href: "/pro", label: "Pro" },
  { href: "/apex", label: "APEX" },
  { href: "/platform", label: "Platform" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

const SCROLL_THRESHOLD = 80;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-parchment/[0.06] bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px]"
          : "border-b border-white/5 bg-black/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Wolf Trades home"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-gold/40 bg-black2 font-display text-sm text-gold"
          >
            WT
          </span>
          <span className="font-display text-lg tracking-wide text-parchment">
            Wolf Trades
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-sm uppercase tracking-wider text-parchment/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/start"
          className="hidden md:inline-flex bg-gold px-4 py-2 font-display text-sm uppercase tracking-wider text-black transition-all duration-150 ease-out hover:bg-[#d4a832] active:scale-[0.98] motion-reduce:active:scale-100"
        >
          Start
        </Link>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
