import sharedConfig from "@gespenst/tailwind-config";

import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
} satisfies Config;

export default config;
