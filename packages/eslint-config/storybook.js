const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "plugin:storybook/recommended",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:perfectionist/recommended-alphabetical",
    "eslint-config-turbo",
  ],
  parserOptions: {
    project,
  },
  plugins: [
    "mdx",
    "storybook",
    "prettier",
    "jsdoc",
    "sort-destructure-keys",
    "perfectionist",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".*.cjs"],
  // add rules configurations here
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "builtin-type",
          "external-type",
          "parent-type",
          "sibling-type",
          "side-effect",
          "side-effect-style",
        ],
      },
    ],
    "prefer-template": "error",
    "react/react-in-jsx-scope": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: false },
    ],
    "sort-keys": ["error", "asc"],
  },
};
