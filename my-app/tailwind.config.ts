import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060501", // Black
        secondary: "#bd9864", // Brown
        tertiary: "#623f1f",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg-landscape.jpg')",
        "metallic-sheen":
          "linear-gradient(180deg, #060501 10%, #42382e 25%, #bd9864 50%, #42382e 75%, #060501 90%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwind-heropatterns")({
      variants: [],

      patterns: ["polka-dots", "signal"],

      colors: {
        default: "#9C92AC",
        gold: "#b8860b",
      },

      opacity: {
        default: "0.4",
        100: "1.0",
      },
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["luxury"],
  },
};

export default config;
