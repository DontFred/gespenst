import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
        destructive: {
          DEFAULT: "hsl(var(--gespenst-destructive))",
          foreground: "hsl(var(--gespenst-destructive-foreground))",
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
          foreground: "hsl(var(--gespenst-primary-foreground))",
        },
        ring: "hsl(var(--gespenst-ring))",
        secondary: {
          DEFAULT: "hsl(var(--gespenst-secondary))",
          foreground: "hsl(var(--gespenst-secondary-foreground))",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        sans: ["var(--font-geist-sans)"],
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
    },
  },
} satisfies Config;

export default config;
