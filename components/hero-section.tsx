import Image from "next/image";
import Link from "next/link";

const aocUrl = "https://aoc.hispafly.es";
const discordUrl = "https://discord.gg/2jABVPzjS";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-navy text-white">
      <Image
        src="/assets/hero-aircraft.png"
        alt="Aeronave HISPAFLY en plataforma"
        fill
        priority
        className="hero-cinematic-image object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/35 to-brand-navy/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.16),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="container-site relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pb-28 pt-32 text-center">
        <div className="hero-reveal inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/85 backdrop-blur">
          <span className="size-2 rounded-full bg-brand-yellow" />
          HISPAFLY Official Website
        </div>

        <h1 className="hero-reveal hero-reveal-delay-1 mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.065em] text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
          Vuela desde España.
          <span className="block text-brand-yellow">Opera como una aerolínea.</span>
        </h1>

        <div className="hero-reveal hero-reveal-delay-2 mt-10 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Link
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-red px-7 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:bg-white hover:text-brand-navy"
          >
            Únete a Discord
          </Link>
          <Link
            href={aocUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur transition hover:bg-brand-yellow hover:text-brand-navy"
          >
            Access AOC
          </Link>
        </div>
      </div>

      <div className="hero-reveal hero-reveal-delay-4 absolute bottom-20 right-5 z-10 hidden w-72 rounded-2xl border border-white/20 bg-brand-navy/72 p-5 text-left shadow-2xl backdrop-blur-xl lg:block">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">Live Ops</p>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
            Online
          </span>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <p className="text-2xl font-black">LEMD</p>
            <p className="text-xs text-white/60">Madrid</p>
          </div>
          <div className="h-px w-12 bg-gradient-to-r from-brand-yellow to-brand-red" />
          <div className="text-right">
            <p className="text-2xl font-black">LEBL</p>
            <p className="text-xs text-white/60">Barcelona</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
          <span className="rounded-lg bg-white/10 px-2 py-2">OFP Ready</span>
          <span className="rounded-lg bg-white/10 px-2 py-2">EFB</span>
          <span className="rounded-lg bg-white/10 px-2 py-2">AOC</span>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-[-1px] h-24 bg-white sm:h-32"
        style={{ clipPath: "polygon(0 46%, 48% 100%, 100% 44%, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
