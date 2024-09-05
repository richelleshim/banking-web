import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#2E516A", // Main accent color
          200: "#3E6B7B", // Lighter shade
          300: "#2A3F4D", // Darker shade
        },
        secondary: {
          50: "#F0F5F8", // Very light gray
          100: "#E1E9ED", // Light gray
          200: "#C5D0D8", // Medium gray
          300: "#9DB5C7", // Slightly darker gray
        },
        success: {
          25: "#E6F7F0",
          50: "#D1F2E9",
          100: "#A8D4C4",
          600: "#2F8F5E",
          700: "#247A4B",
          900: "#1D5A38",
        },
        pink: {
          25: "#FDEDF0",
          100: "#FCD9E4",
          500: "#E9488C",
          600: "#D13B79",
          700: "#B22563",
          900: "#831743",
        },
        blue: {
          25: "#F0F9FF",
          100: "#D1E9FF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          900: "#194185",
        },
        sky: {
          1: "#F3F9FF",
        },
        black: {
          1: "#00214F",
          2: "#344054",
        },
        gray: {
          25: "#FCFCFD",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #2E516A 0%, #3E6B7B 100%)",
        "secondary-gradient":
          "linear-gradient(90deg, #C5D0D8 0%, #9DB5C7 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        "open-sans": "var(--font-open-sans)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
