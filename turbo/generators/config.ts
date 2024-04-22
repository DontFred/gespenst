import type { PlopTypes } from "@turbo/gen";

/**
 *
 * @param plop
 */
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    actions: [
      {
        path: "packages/ui/src/{{kebabCase name}}/types.ts",
        templateFile: "templates/component/ui-type.hbs",
        type: "add",
      },
      {
        path: "packages/ui/src/{{kebabCase name}}/index.tsx",
        templateFile: "templates/component/ui-index.hbs",
        type: "add",
      },
      {
        path: "packages/ui/tsup.config.ts",
        pattern: /entryPoints: \[(?<insertion>)/g,
        template: '"src/{{kebabCase name}}/index.tsx",',
        type: "append",
      },
      {
        path: "packages/ui/package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template:
          '"./{{kebabCase name}}": {"types": "./src/text/index.tsx","import": "./dist/text/index.mjs", "require": "./dist/text/index.js"},',
        type: "append",
      },
      {
        path: "apps/storybook/stories/{{kebabCase name}}.stories.tsx",
        templateFile: "templates/component/story.hbs",
        type: "add",
      },
    ],
    description: "Adds a new react component",
    prompts: [
      {
        message: "What is the name of the component?",
        name: "name",
        type: "input",
      },
    ],
  });
}
