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
        background: "#121212",
        foreground: "#ffffff",
        secondary: "#1a1a1a",
      },
      fontFamily: {
        'raleway': ['var(--font-raleway)'],
        'sora': ['var(--font-sora)'],
      },
    },
  },
  plugins: [],
};
export default config;
