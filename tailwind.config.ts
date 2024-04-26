import type { Config } from "tailwindcss";
// const colors = require('tailwindcss/colors')
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern-1":
          "url('/img/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg')",
        "hero-pattern-2": "url('/img/iwood-R5v8Xtc0ecg-unsplash.jpg')",
        "hero-pattern-3": "url('/img/cat-han-VgyN_CWXQVM-unsplash.jpg')",
        "hero-pattern-4": "url('/img/spacejoy-FX61rYaAfCQ-unsplash.jpg')",
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
      keyframes: {
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
      },
      animation: {
        progress: "progressAnimation 4s ease infinite",
      },
    },
    colors: {
      gray: {
        900: "#111827",
        800: "#1F2937",
        700: "#374151",
        600: "#4B5563",
        500: "#6B7280",
        400: "#9CA3AF",
        300: "#D1D5DB",
        200: "#E5E7EB",
        100: "#F3F4F6",
        50: "#F9FAFB",
      },
      white: colors.white,
      black: colors.black,
      transparent: "transparent",
      current: "currentColor",
      green: {
        500: "#10B981",
        600: "#78B533",
      },
      teal: {
        800: "#115E59",
      },
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
      },
      orange: {
        50: "rgba(255, 247, 237, 0.8)",
      },
      indigo: {
        800: "#3730A3",
      },

      // Configure your color palette here
    },
  },
  plugins: [],
};
export default config;
