import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CloudIcon,
  ComputerDesktopIcon,
  GlobeEuropeAfricaIcon,
  MapIcon,
  RadioIcon,
} from "@heroicons/react/24/outline";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce HISPAFLY, una aerolínea virtual creada en 2025 para operaciones realistas, VATSIM, SimBrief y nuestro ecosistema EFB / ACARS / AOC.",
};

const story = [
  "Desde nuestros inicios, hemos desarrollado nuestro proyecto alrededor del entorno online de VATSIM, aprovechando la actividad, el control ATC en vivo y los procedimientos de red para dar más sentido a cada vuelo. Nuestra relación con VATSIM España refuerza esta visión, acercando nuestras operaciones al espacio aéreo español, a sus eventos y a una comunidad que comparte la misma pasión por la aviación virtual.",
  "Para nosotros, volar no es únicamente completar una ruta. Cada operación empieza mucho antes del despegue: con una planificación adecuada, una preparación operativa clara y una forma de trabajar que permite al piloto sentirse parte de una estructura más amplia.",
  "Por eso integramos herramientas como SimBrief en nuestro flujo de trabajo y desarrollamos nuestras propias soluciones EFB, ACARS y AOC, con el objetivo de conectar la planificación, el seguimiento de vuelos, la comunicación operativa y la gestión interna de la aerolínea.",
  "HISPAFLY combina comunidad, tecnología y realismo operacional para construir una experiencia diferente dentro de la aviación virtual.",
];

const sections = [
  {
    eyebrow: "Nuestra visión",
    title: "Una operación con contexto, preparación y continuidad.",
    image: "/assets/about-origin-map.jpg",
    alt: "Mapa de rutas y bases virtuales del ecosistema HISPAFLY",
    paragraphs: [
      "Nuestro objetivo es construir una aerolínea virtual donde cada piloto pueda disfrutar de una experiencia más realista, sin perder el espíritu de comunidad que hace especial a la simulación aérea.",
      "Queremos que cada vuelo tenga contexto, preparación y continuidad. Que las rutas, la flota, las herramientas y las comunicaciones formen parte de una operación coherente.",
      "HISPAFLY nace como un proyecto de simulación, pero con una forma de trabajar inspirada en la aviación real.",
    ],
  },
  {
    eyebrow: "Nuestra forma de operar",
    title: "Herramientas y procedimientos dentro de un mismo ecosistema.",
    image: "/assets/about-vatsim-flight.jpg",
    alt: "Aeronave HISPAFLY durante una operación virtual en vuelo",
    reverse: true,
    paragraphs: [
      "Trabajamos sobre una base operativa inspirada en el funcionamiento de una aerolínea moderna. La planificación con SimBrief, las operaciones en VATSIM, el seguimiento de vuelos y el uso de herramientas propias forman parte de un mismo ecosistema.",
      "Nuestro sistema AOC permite separar la web pública del entorno operativo interno, facilitando la gestión de vuelos, pilotos, flota y actividad operacional.",
      "No buscamos complicar la simulación. Buscamos darle más sentido.",
    ],
  },
  {
    eyebrow: "Comunidad",
    title: "Pilotos que dan vida a la aerolínea.",
    image: "/assets/about-community-ramp.jpg",
    alt: "Operación de embarque virtual con aeronave HISPAFLY en plataforma",
    paragraphs: [
      "HISPAFLY es, ante todo, una comunidad. Reunimos a pilotos interesados en la simulación realista, las operaciones online y el aprendizaje continuo.",
      "Creemos en una aviación virtual abierta, organizada y colaborativa, donde cada miembro pueda volar, aprender, participar en eventos y formar parte del crecimiento del proyecto.",
      "La tecnología nos ayuda a operar mejor, pero son los pilotos quienes dan vida a la aerolínea.",
    ],
  },
  {
    eyebrow: "Tecnología operativa",
    title: "EFB, ACARS y AOC para conectar cada fase del vuelo.",
    image: "/assets/about-technology-efb.jpg",
    alt: "Cabina de simulación con EFB HISPAFLY y entorno operativo",
    reverse: true,
    paragraphs: [
      "Desde 2025, HISPAFLY trabaja en el desarrollo de un ecosistema operativo propio. Nuestro objetivo es conectar diferentes fases del vuelo en una misma experiencia: planificación, preparación, operación, seguimiento y reporte.",
      "El desarrollo de herramientas como EFB, ACARS y AOC nos permite crear una estructura más cercana a la de una compañía aérea moderna, adaptada al mundo de la simulación.",
      "Estas soluciones no sustituyen la experiencia del piloto: la complementan.",
    ],
  },
];

const ecosystem = [
  {
    title: "VATSIM",
    text: "El entorno online donde nuestras operaciones cobran vida, con tráfico real, control ATC en vivo y procedimientos operativos.",
    icon: RadioIcon,
  },
  {
    title: "VATSIM España",
    text: "Una comunidad clave para nuestras operaciones en el espacio aéreo español, eventos y colaboración dentro de la aviación virtual.",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    title: "SimBrief",
    text: "Herramienta esencial para la planificación de vuelos, preparación de OFP, rutas, combustible y datos operativos.",
    icon: MapIcon,
  },
  {
    title: "HISPAFLY AOC",
    text: "Nuestro entorno interno para la gestión operativa, seguimiento de vuelos, pilotos, flota y actividad de la aerolínea.",
    icon: CloudIcon,
  },
  {
    title: "HISPAFLY EFB / ACARS",
    text: "Herramientas diseñadas para conectar al piloto con la operación antes, durante y después del vuelo.",
    icon: ComputerDesktopIcon,
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="SOBRE NOSOTROS"
        title="Nacimos para volar de una forma más realista."
        description="HISPAFLY es una aerolínea virtual creada en 2025 con una idea clara: ofrecer a los pilotos una experiencia de simulación más completa, organizada y cercana a la operación real de una compañía aérea."
        image="/assets/about-hero-realistic.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                Nuestra historia
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy sm:text-5xl">
                Comunidad, tecnología y realismo operacional.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-gray-600">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="container-site space-y-12">
          {sections.map(({ eyebrow, title, paragraphs, image, alt, reverse }) => (
            <article
              key={title}
              className={`grid items-center gap-8 rounded-[2rem] bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12 ${
                reverse ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                  {eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-brand-navy sm:text-4xl">
                  {title}
                </h3>
                <div className="mt-5 space-y-4 text-base leading-8 text-gray-600 sm:text-lg">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
              Nuestro ecosistema
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy sm:text-5xl">
              Las piezas que conectan nuestra operación.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-red">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="container-site">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">
                Join HISPAFLY
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Forma parte de HISPAFLY
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-5 text-lg leading-8 text-white/75">
                <p>
                  Si buscas una aerolínea virtual con operaciones más realistas,
                  herramientas modernas y una comunidad activa, HISPAFLY es tu lugar.
                </p>
                <p>
                  Únete a nosotros y empieza a vivir la simulación aérea desde una
                  perspectiva más operativa.
                </p>
              </div>
              <Link
                href="/join"
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-brand-yellow px-6 text-sm font-bold text-brand-navy transition hover:bg-white"
              >
                Join Us
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </div>
          </div>

          <p className="mt-8 text-sm leading-7 text-white/45">
            HISPAFLY es un proyecto de aviación virtual y simulación aérea. No está
            afiliado a ninguna aerolínea real ni representa una operación comercial
            real.
          </p>
        </div>
      </section>
    </>
  );
}
