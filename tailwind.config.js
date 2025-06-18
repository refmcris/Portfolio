/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#000000",
          secondary: "#d0e3ff",
          accent: "#232a3b"
        },
        light: {
          DEFAULT: "#f8fafc",
          secondary: "#f1f5f9",
          accent: "#e2e8f0"
        },
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1e40af",
          light: "#60a5fa"
        },
        accent: {
          DEFAULT: "#0ea47a",
          dark: "#047857",
          light: "#34d399"
        },
        text: {
          primary: "#e5e7eb",
          secondary: "#d3d3d3",
          dark: "#1e293b"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      },
      animation: {
        slide: "slide 50s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shine: "shine 5s linear infinite"
      },

      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" }
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-66.666667%)" }
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" }
        }
      },
      spacing: {
        128: "32rem",
        144: "36rem"
      }
    }
  },
  plugins: []
};
