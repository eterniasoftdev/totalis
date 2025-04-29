import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern-1": "url('/img/banner/img33.jpg')",
        "hero-pattern-2": "url('/img/banner/img466.jpg')",
        "hero-pattern-3": "url('/img/banner/img55.jpg')",
        "hero-pattern-4": "url('/img/banner/image-000.png')",
        "hero-pattern-5": "url('/img/spacejoy-9M66C_w_ToM-unsplash.jpg')",
        "hero-pattern-6":
          "url('/img/francesca-tosolini-rYZkQdz2t9o-unsplash.jpg')",
      },
      translate: {
        100: "100%",
        200: "-200%",
        300: "-300%",
        400: "-400%",
        500: "-500%",
        0: "0%",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        progressAnimation: {
          "0%": {
            backgroundImage:
              "linear-gradient(to right,#FFFFFF 0%, #E1D7D7  0%)",
          },
          "25%": {
            backgroundImage:
              "linear-gradient(to right,#FFFFFF 0%, #E1D7D7  25%)",
          },
          "50%": {
            backgroundImage:
              "linear-gradient(to right,#FFFFFF 0%, #E1D7D7  50%)",
          },
          "75%": {
            backgroundImage:
              "linear-gradient(to right,#FFFFFF 0%, #E1D7D7  75%)",
          },

          "100%": {
            backgroundImage:
              "linear-gradient(to right,#FFFFFF 0%, #FFFFFF 100%)",
          },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        progress: "progressAnimation 4s ease infinite",
        fadeInUp: "fadeInUp 0.5s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
