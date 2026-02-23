import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        subtle: "#b3b3b3",
        accent: {
          DEFAULT: "#C7A43D", // premium gold
          dark: "#5C4A19", // deep metallic gold
        }
      },
      fontFamily: {
        sans: ["bauserif", "sans-serif"],
        display: ["bauserif", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
