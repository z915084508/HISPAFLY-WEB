import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LiveFlightBoard } from "@/components/live-flights/live-flight-board";

export const metadata: Metadata = { title: "Vuelos en vivo", description: "Sigue la operación ACARS de HISPAFLY en tiempo real." };

export default function LiveFlightsPage() {
  return <><PageHeader eyebrow="Live Operations" title="Vuelos en vivo" description="Sigue la posición y el estado operativo de los vuelos HISPAFLY conectados mediante ACARS." image="/assets/hero.jpg" /><LiveFlightBoard initialFlights={[]} initialUpdatedAt={new Date(0).toISOString()} /></>;
}
