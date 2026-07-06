import type { ReactNode } from "react";
export function Badge({ children }: { children: ReactNode }) { return <span className="inline-flex rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-brand-yellow">{children}</span>; }
