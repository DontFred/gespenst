import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entryPoints: ["src/button.tsx", "src/style.css", "src/lib/index.ts"],
  external: ["react"],
  format: ["cjs", "esm"],
  sourcemap: true,
  ...options,
}));
