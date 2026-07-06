import type { Metadata } from "next";
import {
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  IdentificationIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Únete",
  description: "Únete a HISPAFLY y empieza a operar como piloto virtual.",
};

const discordUrl = "https://discord.gg/2jABVPzjS";
const vamsysUrl = "https://vamsys.io/register/2024";

const requirements = [
  "Interés genuino por la aviación y el aprendizaje",
  "Actitud respetuosa y colaborativa",
  "Simulador de vuelo compatible",
  "Cuenta activa en vAMSYS",
  "Compromiso con las normas de la comunidad",
];

const steps = [
  {
    icon: ChatBubbleLeftRightIcon,
    n: "01",
    title: "Entra en Discord",
    text: "Conoce a la comunidad y revisa la información inicial.",
  },
  {
    icon: IdentificationIcon,
    n: "02",
    title: "Regístrate en vAMSYS",
    text: "Crea tu perfil y solicita el ingreso en HISPAFLY.",
  },
  {
    icon: PaperAirplaneIcon,
    n: "03",
    title: "Realiza tu primer vuelo",
    text: "Elige una operación disponible y despega con nosotros.",
  },
];

export default function Join() {
  return (
    <>
      <PageHeader
        eyebrow="Join HISPAFLY"
        title="Tu próximo vuelo empieza aquí"
        description="Únete a una comunidad española que combina operaciones realistas, tecnología y pasión por la aviación."
        image="/assets/dubai.jpg"
      />

      <section className="section-space">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Requisitos" title="Todo lo que necesitas para empezar" />
            <ul className="mt-8 space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <CheckCircleIcon className="mt-0.5 size-6 shrink-0 text-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-brand-navy p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-yellow">
              Proceso de incorporación
            </p>
            <div className="mt-8 space-y-8">
              {steps.map(({ icon: Icon, n, title, text }) => (
                <div key={n} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 font-bold text-brand-yellow">
                    {n}
                  </div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={discordUrl} external>
                Join Discord
              </Button>
              <Button href={vamsysUrl} external variant="secondary">
                Ir a vAMSYS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
