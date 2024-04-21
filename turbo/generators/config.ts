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
        path: "packages/ui/src/{{kebabCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
        type: "add",
      },
      {
        path: "packages/ui/package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
        type: "append",
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
