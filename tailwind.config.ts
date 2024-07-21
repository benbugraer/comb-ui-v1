import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        link: "var(--blue-11)",
      },
      backgroundColor: {
        contrast: "var(--contrast-color)",
        primary: "var(--gray-1)",
        secondary: "var(--gray-2)",
        tertiary: "var(--gray-3)",
      },
      borderColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-3)",
      },
      // colors: {
      //   border: "hsl(var(--border))",
      //   input: "hsl(var(--input))",
      //   ring: "hsl(var(--ring))",
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   primary: {
      //     DEFAULT: "hsl(var(--primary))",
      //     foreground: "hsl(var(--primary-foreground))",
      //   },
      //   secondary: {
      //     DEFAULT: "hsl(var(--secondary))",
      //     foreground: "hsl(var(--secondary-foreground))",
      //   },
      //   destructive: {
      //     DEFAULT: "hsl(var(--destructive))",
      //     foreground: "hsl(var(--destructive-foreground))",
      //   },
      //   muted: {
      //     DEFAULT: "hsl(var(--muted))",
      //     foreground: "hsl(var(--muted-foreground))",
      //   },
      //   accent: {
      //     DEFAULT: "hsl(var(--accent))",
      //     foreground: "hsl(var(--accent-foreground))",
      //   },
      //   popover: {
      //     DEFAULT: "hsl(var(--popover))",
      //     foreground: "hsl(var(--popover-foreground))",
      //   },
      //   card: {
      //     DEFAULT: "hsl(var(--card))",
      //     foreground: "hsl(var(--card-foreground))",
      //   },
      // },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        // meteor: {
        //   "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        //   "70%": { opacity: "1" },
        //   "100%": {
        //     transform: "rotate(215deg) translateX(-500px)",
        //     opacity: "0",
        //   },
        // },
        // shimmer: {
        //   "0%, 90%, 100%": {
        //     "background-position": "calc(-100% - var(--shimmer-width)) 0",
        //   },
        //   "30%, 60%": {
        //     "background-position": "calc(100% + var(--shimmer-width)) 0",
        //   },
        // },
        in: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "in-reverse": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "100%": { transform: "translateY(18px)", opacity: "1" },
        },
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
        gradient: "gradient 8s linear infinite",
        // meteor: "meteor 5s linear infinite",
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
        shimmer: "shimmer 8s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), nextui()],
} satisfies Config;

export default config;
