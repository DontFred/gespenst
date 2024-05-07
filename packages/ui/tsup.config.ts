import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entryPoints: [
    "src/collapse/index.tsx",
    "src/card/index.tsx",
    "src/avatar/index.tsx",
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
