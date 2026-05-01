"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { START_FREE_URL } from "@/lib/links";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/wolfpack", label: "Wolfpack" },
  { href: "/pro", label: "Pro" },
  { href: "/apex", label: "APEX" },
  { href: "/platform", label: "Platform" },
  { href: "/results", label: "Results" },
  { href: "/events", label: "Events" },
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
          className="flex items-center"
          aria-label="Wolf Trades home"
        >
          <div className="flex items-center gap-[5px]">
            <span className="font-display text-[22px] uppercase tracking-[.06em] text-parchment leading-none">
              Wolf
            </span>
            <div
              className="flex flex-col items-center gap-[2px]"
              style={{ height: "18px", justifyContent: "center" }}
            >
              <span
                style={{
                  display: "block",
                  width: "3px",
                  height: "10px",
                  background: "#16A34A",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "3px",
                  height: "7px",
                  background: "#C1121F",
                }}
              />
            </div>
            <span className="font-display text-[22px] uppercase tracking-[.06em] text-parchment leading-none">
              Trades
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-sm uppercase tracking-wider text-parchment/80 transition-colors hover:text-bull"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={START_FREE_URL}
          className="hidden md:inline-flex bg-bull px-4 py-2 font-display text-sm uppercase tracking-wider text-black transition-all duration-150 ease-out hover:bg-[#1fc35a] active:scale-[0.98] motion-reduce:active:scale-100"
        >
          Start
        </Link>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
