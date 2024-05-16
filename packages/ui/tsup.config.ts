import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entryPoints: [
    "src/toggle/index.tsx",
    "src/skeleton/index.tsx",
    "src/checkbox/index.tsx",
    "src/modal/index.tsx",
    "src/popover/index.tsx",
    "src/badge/index.tsx",
    "src/avatar/index.tsx",
    "src/spinner/index.tsx",
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
