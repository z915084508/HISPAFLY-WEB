import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { AircraftLocationSection } from "@/components/aircraft-location-section";
import { PublicFleetSection } from "@/components/public-fleet-section";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Conoce la flota HISPAFLY y la ubicacion publica orientativa de aeronaves para simulacion virtual.",
};

export default function Fleet() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra flota"
        title="El avion adecuado para cada mision"
        description="Una seleccion de aeronaves capaz de conectar nuestra red domestica, europea e intercontinental."
        image="/assets/hero-aircraft.png"
      />

      <PublicFleetSection />

      <AircraftLocationSection />

      <CTASection
        title="Encuentra tu proxima cabina"
        text="Consulta los requisitos de ingreso y empieza a operar la flota HISPAFLY."
      />
    </>
  );
}
