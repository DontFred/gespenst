import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  darkMode: ["class"],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-inner-border"),
  ],
  prefix: "",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      accents: {
        1: "var(--gespenst-accents-1)",
        2: "var(--gespenst-accents-2)",
        3: "var(--gespenst-accents-3)",
        4: "var(--gespenst-accents-4)",
        5: "var(--gespenst-accents-5)",
        6: "var(--gespenst-accents-6)",
        7: "var(--gespenst-accents-7)",
        8: "var(--gespenst-accents-8)",
      },
      gray: {
        100: "hsl(var(--gespenst-gray-100))",
        200: "hsl(var(--gespenst-gray-200))",
        300: "hsl(var(--gespenst-gray-300))",
        400: "hsl(var(--gespenst-gray-400))",
        500: "hsl(var(--gespenst-gray-500))",
        600: "hsl(var(--gespenst-gray-600))",
        700: "hsl(var(--gespenst-gray-700))",
        800: "hsl(var(--gespenst-gray-800))",
        900: "hsl(var(--gespenst-gray-900))",
        1000: "hsl(var(--gespenst-gray-1000))",
      },
      blue: {
        100: "hsl(var(--gespenst-blue-100))",
        200: "hsl(var(--gespenst-blue-200))",
        300: "hsl(var(--gespenst-blue-300))",
        400: "hsl(var(--gespenst-blue-400))",
        500: "hsl(var(--gespenst-blue-500))",
        600: "hsl(var(--gespenst-blue-600))",
        700: "hsl(var(--gespenst-blue-700))",
        800: "hsl(var(--gespenst-blue-800))",
        900: "hsl(var(--gespenst-blue-900))",
        1000: "hsl(var(--gespenst-blue-1000))",
      },
      red: {
        100: "hsl(var(--gespenst-red-100))",
        200: "hsl(var(--gespenst-red-200))",
        300: "hsl(var(--gespenst-red-300))",
        400: "hsl(var(--gespenst-red-400))",
        500: "hsl(var(--gespenst-red-500))",
        600: "hsl(var(--gespenst-red-600))",
        700: "hsl(var(--gespenst-red-700))",
        800: "hsl(var(--gespenst-red-800))",
        900: "hsl(var(--gespenst-red-900))",
        1000: "hsl(var(--gespenst-red-1000))",
      },
      amber: {
        100: "hsl(var(--gespenst-amber-100))",
        200: "hsl(var(--gespenst-amber-200))",
        300: "hsl(var(--gespenst-amber-300))",
        400: "hsl(var(--gespenst-amber-400))",
        500: "hsl(var(--gespenst-amber-500))",
        600: "hsl(var(--gespenst-amber-600))",
        700: "hsl(var(--gespenst-amber-700))",
        800: "hsl(var(--gespenst-amber-800))",
        900: "hsl(var(--gespenst-amber-900))",
        1000: "hsl(var(--gespenst-amber-1000))",
      },
      green: {
        100: "hsl(var(--gespenst-green-100))",
        200: "hsl(var(--gespenst-green-200))",
        300: "hsl(var(--gespenst-green-300))",
        400: "hsl(var(--gespenst-green-400))",
        500: "hsl(var(--gespenst-green-500))",
        600: "hsl(var(--gespenst-green-600))",
        700: "hsl(var(--gespenst-green-700))",
        800: "hsl(var(--gespenst-green-800))",
        900: "hsl(var(--gespenst-green-900))",
        1000: "hsl(var(--gespenst-green-1000))",
      },
      teal: {
        100: "hsl(var(--gespenst-teal-100))",
        200: "hsl(var(--gespenst-teal-200))",
        300: "hsl(var(--gespenst-teal-300))",
        400: "hsl(var(--gespenst-teal-400))",
        500: "hsl(var(--gespenst-teal-500))",
        600: "hsl(var(--gespenst-teal-600))",
        700: "hsl(var(--gespenst-teal-700))",
        800: "hsl(var(--gespenst-teal-800))",
        900: "hsl(var(--gespenst-teal-900))",
        1000: "hsl(var(--gespenst-teal-1000))",
      },
      purple: {
        100: "hsl(var(--gespenst-purple-100))",
        200: "hsl(var(--gespenst-purple-200))",
        300: "hsl(var(--gespenst-purple-300))",
        400: "hsl(var(--gespenst-purple-400))",
        500: "hsl(var(--gespenst-purple-500))",
        600: "hsl(var(--gespenst-purple-600))",
        700: "hsl(var(--gespenst-purple-700))",
        800: "hsl(var(--gespenst-purple-800))",
        900: "hsl(var(--gespenst-purple-900))",
        1000: "hsl(var(--gespenst-purple-1000))",
      },
      pink: {
        100: "hsl(var(--gespenst-pink-100))",
        200: "hsl(var(--gespenst-pink-200))",
        300: "hsl(var(--gespenst-pink-300))",
        400: "hsl(var(--gespenst-pink-400))",
        500: "hsl(var(--gespenst-pink-500))",
        600: "hsl(var(--gespenst-pink-600))",
        700: "hsl(var(--gespenst-pink-700))",
        800: "hsl(var(--gespenst-pink-800))",
        900: "hsl(var(--gespenst-pink-900))",
        1000: "hsl(var(--gespenst-pink-1000))",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        skeleton: "skeleton 8s ease-in-out infinite",
        "accordion-down": "accordion-down 0.1s ease-out",
        "accordion-up": "accordion-up 0.1s ease-out",
        loader: "loader 1.2s linear infinite",
      },
      borderRadius: {
        lg: "var(--gespenst-radius)",
        md: "calc(var(--gespenst-radius) - 2px)",
        sm: "calc(var(--gespenst-radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--gespenst-accent))",
          foreground: "hsl(var(--gespenst-accent-foreground))",
        },
        background: "hsl(var(--gespenst-background))",
        border: "hsl(var(--gespenst-border))",
        card: {
          DEFAULT: "hsl(var(--gespenst-card))",
          foreground: "hsl(var(--gespenst-card-foreground))",
        },
        foreground: "hsl(var(--gespenst-foreground))",
        input: "hsl(var(--gespenst-input))",
        muted: {
          DEFAULT: "hsl(var(--gespenst-muted))",
          foreground: "hsl(var(--gespenst-muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--gespenst-popover))",
          foreground: "hsl(var(--gespenst-popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--gespenst-primary))",
          hover: "hsl(var(--gespenst-primary-hover))",
          foreground: "hsl(var(--gespenst-primary-foreground))",
        },
        ring: "hsl(var(--gespenst-ring))",
        secondary: {
          DEFAULT: "hsl(var(--gespenst-secondary))",
          hover: "hsl(var(--gespenst-secondary-hover))",
          foreground: "hsl(var(--gespenst-secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--gespenst-success))",
          hover: "hsl(var(--gespenst-success-hover))",
          active: "hsl(var(--gespenst-success-active))",
          foreground: "hsl(var(--gespenst-success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--gespenst-warning))",
          hover: "hsl(var(--gespenst-warning-hover))",
          active: "hsl(var(--gespenst-warning-active))",
          foreground: "hsl(var(--gespenst-warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--gespenst-info))",
          hover: "hsl(var(--gespenst-info-hover))",
          active: "hsl(var(--gespenst-info-active))",
          foreground: "hsl(var(--gespenst-info-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--gespenst-error))",
          hover: "hsl(var(--gespenst-error-hover))",
          active: "hsl(var(--gespenst-error-active))",
          foreground: "hsl(var(--gespenst-error-foreground))",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        sans: ["var(--font-geist-sans)"],
      },
      keyframes: {
        skeleton: {
          from: {
            backgroundPosition: "200% 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        loader: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: ".15",
          },
        },
      },
      maxWidth: {
        "8xl": "1400px",
      },
      backgroundImage: {
        skeleton:
          "linear-gradient(270deg, var(--gespenst-accents-1), var(--gespenst-accents-2), var(--gespenst-accents-2), var(--gespenst-accents-1))",
      },
    },
  },
} satisfies Config;

export default config;
