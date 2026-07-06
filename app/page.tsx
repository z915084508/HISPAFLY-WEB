import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { HeroSection } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "HISPAFLY es una aerolínea virtual moderna enfocada en operaciones realistas, VATSIM, SimBrief y su propio ecosistema EFB / AOC.",
};

const ecosystem = [
  {
    title: "VATSIM",
    label: "Operational Network",
    logo: "/assets/partner-vatsim.png",
    href: "https://vatsim.net",
  },
  {
    title: "VATSIM España",
    label: "Community Collaboration",
    logo: "/assets/partner-vatsim-spain.png",
    href: "https://vatsimspain.es",
  },
  {
    title: "SimBrief",
    label: "Flight Planning Integration",
    logo: "/assets/partner-simbrief.png",
    href: "https://www.simbrief.com/home/",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-site">
          <div className="mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
              SOBRE HISPAFLY
            </p>
            <h2 className="mx-auto mt-5 max-w-6xl text-4xl font-bold tracking-[-0.045em] text-brand-navy sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
              Una forma más realista de volar.
            </h2>
            <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
              <p>
                HISPAFLY es una aerolínea virtual creada para pilotos que buscan una
                experiencia más realista, organizada y cercana a la operación de una
                aerolínea moderna.
              </p>
              <p>
                Volamos en VATSIM, planificamos con SimBrief y conectamos cada
                operación con nuestras propias herramientas.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-red transition hover:text-brand-navy"
            >
              Conoce más sobre nosotros
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="container-site">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                Operational Ecosystem
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-brand-navy sm:text-4xl">
                La base de nuestra operación virtual.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {ecosystem.map(({ title, label, logo, href }) => (
                <Link
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${title}`}
                  className="group flex min-h-40 flex-col justify-between rounded-xl bg-[#f5f5f5] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-24 items-center">
                    <Image
                      src={logo}
                      alt={`${title} logo`}
                      width={320}
                      height={180}
                      className="max-h-20 w-auto object-contain transition group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-gray-500">{label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="container-site">
          <div className="grid gap-8 rounded-[2rem] bg-brand-navy p-8 text-white sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">
                Primer paso
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Listo para volar con nosotros?
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-7">
              <p className="text-lg leading-8 text-white/75">
                Forma parte de una comunidad que combina simulación realista,
                operaciones en VATSIM y herramientas propias para pilotos.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/join"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-yellow px-6 text-sm font-bold text-brand-navy transition hover:bg-white"
                >
                  Join Us
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-brand-navy"
                >
                  Conoce HISPAFLY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container-site flex flex-col gap-4 border-t border-gray-200 pt-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-red">
              <PaperAirplaneIcon className="size-4" />
            </span>
            <span>Acceso reservado al entorno operativo HISPAFLY AOC.</span>
          </div>
          <Link
            href="https://aoc.hispafly.es"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand-red hover:text-brand-navy"
          >
            Access AOC →
          </Link>
        </div>
      </section>
    </>
  );
}
