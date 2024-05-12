/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment*/

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  images: {
    domains: ["images.unsplash.com", "github.com"],
  },
  transpilePackages: ["@gespenst/ui", "geist"],
});
