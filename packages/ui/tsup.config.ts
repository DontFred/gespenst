import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entryPoints: [
    "src/avatar/index.tsx",
    "src/style.css",
    "src/font-geist/index.ts",
    "src/text/index.tsx",
    "src/button/index.tsx",
    "src/lib/index.ts",
  ],
  external: ["react"],
  format: ["cjs", "esm"],
  sourcemap: true,
  ...options,
}));
