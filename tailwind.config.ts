import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { dark: "#0a0a0a", indigo: "#6366f1" } } },
  plugins: [],
};
export default config;