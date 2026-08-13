"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

export type EcosystemShot = { src: string; alt: string; caption: string };

export function EcosystemGallery({ shots, product }: { shots: EcosystemShot[]; product: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const go = (step: number) => setActive((current) => (current + step + shots.length) % shots.length);

  useEffect(() => {
    if (paused || shots.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % shots.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused, shots.length]);

  return <div className="group relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current; if (Math.abs(distance) > 45) go(distance > 0 ? -1 : 1); touchStart.current = null; }} aria-label={`${product} interface gallery`}>
    <div className="absolute -inset-4 translate-x-3 translate-y-3 bg-brand-yellow/70" />
    <div className="relative overflow-hidden rounded-xl border-[8px] border-[#111827] bg-[#111827] shadow-2xl"><div className="relative aspect-[16/10]">
      {shots.map((shot, index) => <Image key={shot.src} src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover object-top transition duration-700 ${index === active ? "scale-100 opacity-100" : "pointer-events-none scale-[1.015] opacity-0"}`} />)}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-4 pb-4 pt-14 text-white sm:px-5"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-brand-yellow">REAL HISPAFLY INTERFACE</p><p className="mt-1 text-sm font-semibold">{shots[active].caption}</p></div><span className="shrink-0 text-xs font-bold tabular-nums text-white/70">{String(active + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}</span></div>
    </div></div>
    {shots.length > 1 && <><button type="button" onClick={() => go(-1)} aria-label={`Previous ${product} image`} className="absolute left-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-[#07111f]/90 text-white shadow-lg transition hover:bg-brand-red sm:-left-1"><ChevronLeftIcon className="size-5" /></button><button type="button" onClick={() => go(1)} aria-label={`Next ${product} image`} className="absolute right-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-[#07111f]/90 text-white shadow-lg transition hover:bg-brand-red sm:-right-1"><ChevronRightIcon className="size-5" /></button><div className="relative mt-6 flex justify-center gap-2">{shots.map((shot, index) => <button key={shot.src} type="button" aria-label={`Show ${shot.caption}`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${index === active ? "w-8 bg-brand-red" : "w-3 bg-brand-navy/20 hover:bg-brand-navy/45"}`} />)}</div></>}
  </div>;
}
