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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ziewNight: "#1e1b4b",   // Indigo 950 - calm night text
        ziewMoon: "#fcd34d",    // Amber 300 - warm moon accent
        ziewPurple: "#c084fc",  // Purple 400 - magical vibe
        ziewBlue: "#93c5fd",    // Blue 300 - sky blue
        ziewCream: "#fcf8f2",   // Warm cream background
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
        heading: ["var(--font-quicksand)", "sans-serif"],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
