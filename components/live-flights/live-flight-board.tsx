"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { PublicLiveFlight } from "./types";

const LiveMap = dynamic(() => import("./live-map"), { ssr: false, loading: () => <div className="h-[520px] animate-pulse bg-slate-200" /> });
const endpoint = process.env.NEXT_PUBLIC_AOC_URL ?? "https://aoc.hispafly.es";

export function LiveFlightBoard({ initialFlights, initialUpdatedAt }: { initialFlights: PublicLiveFlight[]; initialUpdatedAt: string }) {
  const [flights, setFlights] = useState(initialFlights);
  const [updatedAt, setUpdatedAt] = useState(initialUpdatedAt);
  useEffect(() => {
    const refresh = async () => {
      const response = await fetch(`${endpoint}/api/public/live-flights`, { cache: "no-store" });
      if (!response.ok) return;
      const body = await response.json();
      setFlights(body.flights);
      setUpdatedAt(body.updatedAt);
    };
    void refresh();
    const timer = window.setInterval(refresh, 10_000);
    return () => window.clearInterval(timer);
  }, []);
  const active = useMemo(() => flights.filter((flight) => flight.sessionStatus === "ACTIVE"), [flights]);
  return <section className="section-space bg-slate-50">
    <div className="container-site">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">ACARS LIVE</p><h2 className="display">Operación en tiempo real</h2></div><p className="text-sm text-gray-500">{new Date(updatedAt).getTime() ? `Actualizado ${new Date(updatedAt).toLocaleTimeString("es-ES")}` : "Conectando con AOC…"}</p></div>
      <div className="mb-6 grid gap-4 sm:grid-cols-3"><Stat label="Activos" value={active.length} /><Stat label="En línea" value={active.filter((flight) => flight.connectionStatus === "ONLINE").length} /><Stat label="Con demora" value={active.filter((flight) => flight.connectionStatus === "DELAYED").length} /></div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"><LiveMap flights={flights} /></div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead className="bg-brand-navy text-xs uppercase tracking-wider text-white"><tr><th className="px-5 py-4">Vuelo</th><th className="px-5 py-4">Ruta</th><th className="px-5 py-4">Aeronave</th><th className="px-5 py-4">Fase</th><th className="px-5 py-4">Altitud / GS</th><th className="px-5 py-4">Estado</th></tr></thead><tbody>{flights.map((flight) => <tr key={`${flight.flightNumber}-${flight.callsign}`} className="border-t border-slate-100"><td className="px-5 py-4 font-bold text-brand-navy">{flight.flightNumber}<span className="block text-xs font-normal text-gray-500">{flight.callsign}</span></td><td className="px-5 py-4">{flight.departureIcao} → {flight.arrivalIcao}</td><td className="px-5 py-4">{flight.aircraftRegistration}<span className="block text-xs text-gray-500">{flight.aircraftType}</span></td><td className="px-5 py-4">{flight.phase}</td><td className="px-5 py-4">{flight.altitudeFeet?.toFixed(0) ?? "—"} ft / {flight.groundSpeedKnots?.toFixed(0) ?? "—"} kt</td><td className="px-5 py-4"><Status value={flight.connectionStatus} /></td></tr>)}</tbody></table></div>{!flights.length && <p className="p-10 text-center text-gray-500">No hay vuelos ACARS activos en este momento.</p>}</div>
    </div>
  </section>;
}

function Stat({ label, value }: { label: string; value: number }) { return <div className="rounded-xl border border-slate-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</p><strong className="mt-2 block text-4xl text-brand-navy">{value}</strong></div>; }
function Status({ value }: { value: PublicLiveFlight["connectionStatus"] }) { const color = value === "ONLINE" ? "bg-emerald-100 text-emerald-700" : value === "DELAYED" ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-600"; return <span className={`rounded-full px-3 py-1 text-xs font-bold ${color}`}>{value}</span>; }
