"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/operations", "Operations"],
  ["/fleet", "Fleet"],
  ["/efb", "EFB"],
  ["/aoc", "AOC"],
  ["/join", "Join Us"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition ${
        isHome
          ? "border-b border-gray-200 bg-white text-brand-navy shadow-md shadow-black/10"
          : "border-b border-white/10 bg-brand-navy/95 text-white"
      }`}
    >
      <div className="container-site flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="HISPAFLY inicio" className="py-2">
          <Image
            src="/assets/logo-hispafly-full.png"
            alt="HISPAFLY"
            width={230}
            height={54}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition ${
                isHome
                  ? pathname === href
                    ? "text-brand-red"
                    : "text-brand-navy/80 hover:text-brand-red"
                  : pathname === href
                    ? "text-brand-yellow"
                    : "text-white/82 hover:text-brand-yellow"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden h-px w-[230px] xl:block" />

        <button
          type="button"
          className={`rounded-lg p-2 xl:hidden ${isHome ? "bg-brand-navy text-white" : "bg-black/20"}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Abrir navegación"
        >
          {open ? <XMarkIcon className="size-7" /> : <Bars3Icon className="size-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-navy xl:hidden">
          <div className="container-site flex flex-col py-5">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-semibold text-white/80"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
