import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entryPoints: [
    "src/load-spinner/index.tsx",
    "src/card/index.tsx",
    "src/button/index.tsx",
    "src/style.css",
    "src/font-geist/index.ts",
    "src/text/index.tsx",
    "src/icon/index.tsx",
    "src/provider/index.tsx",
    "src/lib/index.ts",
  ],
  external: ["react"],
  format: ["cjs", "esm"],
  sourcemap: true,
  ...options,
}));
