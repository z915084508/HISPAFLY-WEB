import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const style = {
    primary: "bg-brand-yellow text-brand-navy hover:bg-white",
    secondary: "border border-white/35 bg-white/10 text-white hover:bg-white hover:text-brand-navy",
    dark: "bg-brand-navy text-white hover:bg-brand-red",
  }[variant];

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-bold transition ${style} ${className}`}
    >
      {children}
      <span className="ml-2" aria-hidden>
        →
      </span>
    </Link>
  );
}
