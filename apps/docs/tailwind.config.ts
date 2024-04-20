import sharedConfig from "@gespenst/tailwind-config";

import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}"],
  presets: [sharedConfig],
} satisfies Config;

export default config;
