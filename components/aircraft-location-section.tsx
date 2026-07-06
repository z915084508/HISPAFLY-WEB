"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionTitle } from "@/components/section-title";

type AircraftLocation = {
  registration: string;
  type: string;
  currentAirport?: string | null;
  currentAirportName?: string | null;
  status?: "available" | "scheduled" | "in_flight" | "unknown" | string | null;
  lastRoute?: string | null;
  updatedAt?: string | null;
};

function statusLabel(aircraft: AircraftLocation) {
  const airport = aircraft.currentAirport;

  switch (aircraft.status) {
    case "available":
      return airport ? `Disponible en ${airport}` : "Disponible";
    case "scheduled":
      return "Programado para próxima operación";
    case "in_flight":
      return "En vuelo";
    default:
      return "Ubicación pendiente de actualizar";
  }
}

function formatUpdatedAt(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function AircraftLocationSection() {
  const [data, setData] = useState<AircraftLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadLocations() {
      try {
        const response = await fetch("/api/public/aircraft-locations", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Aircraft locations request failed");
        }

        const locations = (await response.json()) as AircraftLocation[];

        if (active) {
          setData(Array.isArray(locations) ? locations : []);
          setError(false);
        }
      } catch {
        if (active) {
          setError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadLocations();

    return () => {
      active = false;
    };
  }, []);

  const safeData = useMemo(
    () =>
      data.filter((aircraft) => aircraft.registration && aircraft.type).map((aircraft) => ({
        ...aircraft,
        updatedLabel: formatUpdatedAt(aircraft.updatedAt),
      })),
    [data],
  );

  return (
    <section className="section-space bg-white">
      <div className="container-site">
        <SectionTitle
          eyebrow="LIVE FLEET"
          title="Aircraft Location"
          description="La ubicación de la flota se actualiza a partir del sistema operativo HISPAFLY AOC."
        />

        <div className="mt-10">
          {loading && (
            <div className="rounded-2xl border border-gray-200 bg-[#f5f5f5] p-6 text-gray-600">
              Cargando ubicación de la flota...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-brand-red">
              No se pudo cargar la ubicación de la flota.
            </div>
          )}

          {!loading && !error && safeData.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-[#f5f5f5] p-6 text-gray-600">
              No hay datos públicos de ubicación disponibles en este momento.
            </div>
          )}

          {!loading && !error && safeData.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {safeData.map((aircraft) => (
                <article key={aircraft.registration} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                        {aircraft.registration}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-brand-navy">{aircraft.type}</h3>
                    </div>
                    <span className="rounded-full bg-brand-yellow/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-navy">
                      {aircraft.status ?? "unknown"}
                    </span>
                  </div>

                  <p className="mt-5 text-lg font-semibold text-brand-navy">{statusLabel(aircraft)}</p>

                  {(aircraft.currentAirportName || aircraft.lastRoute || aircraft.updatedLabel) && (
                    <dl className="mt-5 grid gap-3 border-t border-gray-100 pt-5 text-sm text-gray-600">
                      {aircraft.currentAirportName && (
                        <div>
                          <dt className="font-bold text-gray-500">Aeropuerto</dt>
                          <dd>{aircraft.currentAirportName}</dd>
                        </div>
                      )}
                      {aircraft.lastRoute && (
                        <div>
                          <dt className="font-bold text-gray-500">Última ruta</dt>
                          <dd>{aircraft.lastRoute}</dd>
                        </div>
                      )}
                      {aircraft.updatedLabel && (
                        <div>
                          <dt className="font-bold text-gray-500">Actualizado</dt>
                          <dd>{aircraft.updatedLabel}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

        <p className="mt-6 text-sm leading-6 text-gray-500">
          Información orientativa para simulación virtual. La disponibilidad puede variar según la programación operativa.
        </p>
      </div>
    </section>
  );
}
