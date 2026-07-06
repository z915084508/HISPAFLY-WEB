import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
export const metadata: Metadata = { metadataBase: new URL("https://www.hispafly.es"), title: { default: "HISPAFLY | Desde España al mundo", template: "%s | HISPAFLY" }, description: "HISPAFLY es una aerolínea virtual española orientada a operaciones realistas, formación y comunidad.", keywords: ["HISPAFLY", "aerolínea virtual", "aviación", "VATSIM", "vAMSYS", "operaciones aéreas"], openGraph: { title: "HISPAFLY", description: "Desde España al mundo.", url: "https://www.hispafly.es", siteName: "HISPAFLY", locale: "es_ES", type: "website" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className="antialiased"><Navbar /><main>{children}</main><Footer /></body></html>; }
