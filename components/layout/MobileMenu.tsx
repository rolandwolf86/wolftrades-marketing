"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { START_FREE_URL } from "@/lib/links";

interface NavLink {
  href: string;
  label: string;
}

export function MobileMenu({ links }: { links: ReadonlyArray<NavLink> }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Auto-close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Esc closes
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((current) => !current)}
        className="md:hidden -mr-3 flex h-12 w-12 items-center justify-center"
      >
        <span className="relative block h-[18px] w-6">
          <span
            aria-hidden
            className={`absolute left-0 block h-[2px] w-6 bg-parchment transition-all duration-200 ease-out ${
              open ? "top-2 rotate-45" : "top-0"
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-0 top-2 block h-[2px] w-6 bg-parchment transition-opacity duration-200 ease-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-0 block h-[2px] w-6 bg-parchment transition-all duration-200 ease-out ${
              open ? "top-2 -rotate-45" : "top-4"
            }`}
          />
        </span>
      </button>

      {/* Backdrop — tap to close */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-x-0 bottom-0 top-16 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`md:hidden fixed inset-x-0 top-16 border-t border-white/5 bg-black transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile primary" className="px-6 py-4">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[48px] items-center font-display text-base uppercase tracking-wider text-parchment/80 transition-colors hover:text-bull"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-white/5 pt-4">
            <Link
              href={START_FREE_URL}
              className="flex min-h-[48px] w-full items-center justify-center bg-bull px-6 py-3 font-display text-sm uppercase tracking-wider text-black transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
