"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/badge";
import { SectionTitle } from "@/components/section-title";

type PublicFleetAircraft = {
  id: string;
  registration?: string | null;
  type?: string | null;
  fleet?: string | null;
  displayName?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  baseIcao?: string | null;
  status?: string | null;
  seats?: number | null;
  cargoCapacityKg?: number | null;
};

type PublicFleetResponse = {
  aircraft?: PublicFleetAircraft[];
};

const publicFleetUrl =
  process.env.NEXT_PUBLIC_AOC_PUBLIC_FLEET_URL || "https://aoc.hispafly.es/api/public/fleet";

const fallbackFleet: PublicFleetAircraft[] = [
  {
    id: "a320-family",
    displayName: "Airbus A320 Family",
    type: "A320 Family",
    fleet: "Corto y medio radio",
    imageUrl: "/assets/plane-blue.png",
    description:
      "Flota principal para la red domestica y europea, con alta frecuencia y operacion flexible.",
    status: "Active",
  },
  {
    id: "a330",
    displayName: "Airbus A330",
    type: "A330",
    fleet: "Largo radio",
    imageUrl: "/assets/hero-aircraft.png",
    description:
      "Aeronave de fuselaje ancho para operaciones intercontinentales y rutas de gran autonomia.",
    status: "Active",
  },
  {
    id: "b737",
    displayName: "Boeing 737",
    type: "B737",
    fleet: "Corto y medio radio",
    imageUrl: "/assets/puente-aereo-madrid-barcelona.png",
    description:
      "Plataforma de pasillo unico para operaciones de alta disponibilidad en la red europea.",
    status: "Active",
  },
];

function normalizeAircraft(items: PublicFleetAircraft[]) {
  return items
    .filter((item) => item.displayName || item.registration || item.type)
    .map((item) => ({
      ...item,
      title: item.displayName || item.registration || item.type || "HISPAFLY Aircraft",
      subtitle: item.registration && item.type ? `${item.registration} · ${item.type}` : item.type || item.registration,
      imageUrl: item.imageUrl || "/assets/plane-blue.png",
      status: item.status || "Active",
    }));
}

export function PublicFleetSection() {
  const [aircraft, setAircraft] = useState<PublicFleetAircraft[]>(fallbackFleet);
  const [source, setSource] = useState<"live" | "fallback">("fallback");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadFleet() {
      try {
        const response = await fetch(publicFleetUrl, { cache: "no-store" });
        if (!response.ok) throw new Error("Public fleet request failed");
        const payload = (await response.json()) as PublicFleetResponse;
        const liveAircraft = Array.isArray(payload.aircraft) ? payload.aircraft : [];
        if (active && liveAircraft.length > 0) {
          setAircraft(liveAircraft);
          setSource("live");
        }
      } catch {
        if (active) {
          setSource("fallback");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadFleet();

    return () => {
      active = false;
    };
  }, []);

  const cards = useMemo(() => normalizeAircraft(aircraft), [aircraft]);

  return (
    <section className="section-space bg-[#f5f5f5]">
      <div className="container-site">
        <SectionTitle
          eyebrow="Aircraft portfolio"
          title="Flota HISPAFLY"
          description="Aeronaves publicadas desde HISPAFLY AOC para presentar la flota operativa de forma segura."
        />

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm">
            {source === "live" ? "Datos sincronizados desde HISPAFLY AOC" : "Vista publica de referencia"}
          </span>
          {loading && <span>Cargando flota publicada...</span>}
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft">
              <div className="relative h-56 bg-[#e9edf2]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute left-4 top-4">
                  <Badge>{item.status}</Badge>
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                  {item.subtitle || "HISPAFLY"}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-brand-navy">{item.title}</h3>
                {item.description && <p className="mt-4 leading-7 text-gray-600">{item.description}</p>}

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5 text-sm text-gray-600">
                  {item.fleet && (
                    <div>
                      <dt className="font-bold text-gray-500">Fleet</dt>
                      <dd>{item.fleet}</dd>
                    </div>
                  )}
                  {item.baseIcao && (
                    <div>
                      <dt className="font-bold text-gray-500">Base</dt>
                      <dd>{item.baseIcao}</dd>
                    </div>
                  )}
                  {item.seats && (
                    <div>
                      <dt className="font-bold text-gray-500">Seats</dt>
                      <dd>{item.seats}</dd>
                    </div>
                  )}
                  {item.cargoCapacityKg && (
                    <div>
                      <dt className="font-bold text-gray-500">Cargo</dt>
                      <dd>{item.cargoCapacityKg.toLocaleString("es-ES")} kg</dd>
                    </div>
                  )}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-6 text-gray-500">
          La informacion publica de la flota puede cambiar segun la programacion operativa. Los datos tecnicos internos,
          mantenimiento y costes permanecen dentro de HISPAFLY AOC.
        </p>
      </div>
    </section>
  );
}
