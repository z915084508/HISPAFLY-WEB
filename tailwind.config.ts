import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: { yellow: "#FFC400", red: "#D71920", navy: "#101827", cream: "#FFF8E6" } }, boxShadow: { soft: "0 20px 50px -24px rgba(16, 24, 39, .28)" } } }, plugins: [] } satisfies Config;
