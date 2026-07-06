import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "HISPAFLY",
    links: [
      ["/about", "Sobre nosotros"],
      ["/fleet", "Fleet"],
      ["/join", "Únete"],
    ],
  },
  {
    title: "Operaciones",
    links: [
      ["/operations", "Operations"],
      ["/efb", "Electronic Flight Bag"],
      ["/aoc", "AOC"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy", "Privacidad"],
      ["/terms", "Términos de uso"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0b111d] text-white">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.5fr_2fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/20">
            <Image
              src="/assets/logo-hispafly-full.png"
              alt="HISPAFLY"
              width={220}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/55">
            Simulación realista, operaciones online y comunidad.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-yellow">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map(([href, label]) => (
                  <li key={href}>
                    <Link className="text-sm text-white/60 transition hover:text-white" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} HISPAFLY. Todos los derechos reservados.</p>
          <p>Proyecto de aviación virtual. No afiliado a ninguna aerolínea real.</p>
        </div>
      </div>
    </footer>
  );
}
