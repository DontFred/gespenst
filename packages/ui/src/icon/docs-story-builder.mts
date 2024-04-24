import { readdir } from "node:fs/promises";
import path from "node:path";

import fs from "fs-extra";
import loading from "loading-cli";

const cwd = process.cwd();
const inputDir = path.join(cwd, "src", "icon", "svgs");
const storyDir = path.join(
  cwd,
  "../",
  "../",
  "apps",
  "storybook",
  "stories",
  "icon"
);

await fs.ensureDir(inputDir);
await fs.ensureDir(storyDir);

const loader = loading("Loading icons").start();

const files = await readdir(inputDir, { recursive: true });

const svgFiles = files.filter((file) => file.endsWith(".svg"));

loader.info(`Creating Stories for ${svgFiles.length} icons`);

const story = `import { Icon } from "@gespenst/ui/icon";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  argTypes: {},
  component: Icon,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: "0 auto",
          width: "100px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  title: "Icon/Icon",
};

export default meta;

type Story = StoryObj<typeof Icon>;

${svgFiles
  .sort()
  .map((iconFileName) => {
    loader.info(`Creating ${iconFileName} story`);
    const iconName = iconFileName.replace(".svg", "");
    const kebabCaseName = iconName.replace(
      /-./g,
      (lettersHyphen) => lettersHyphen?.[1]?.toUpperCase() ?? ""
    );
    const FirstLetterUpperCase =
      kebabCaseName.charAt(0).toUpperCase() + kebabCaseName.slice(1);
    return `export const ${FirstLetterUpperCase}: Story = {
  args: {
    name: "${iconName}",
  },
};`;
  })
  .join("\n\n")}
`;
await fs.outputFile(path.join(storyDir, "icons.stories.tsx"), story);
loader.succeed("Stories created");
// const docsDir = path.join(cwd, "src", "icon", "icons");
