import { readdir } from "node:fs/promises";

import fs from "fs-extra";
import loading from "loading-cli";
import parse from "node-html-parser";

import type { Node } from "node-html-parser";

type Icons = Record<
  string,
  {
    children: IconChildren[];
    style: string;
    viewBox: string;
  }
>;

interface IconChildren {
  attributes: Record<string, string>;
  children: IconChildren[];
  tag: string;
}

const loader = loading("Loading icons").start();

const files = await readdir("./svgs", { recursive: true });

const svgFiles = files.filter((file) => file.endsWith(".svg"));
loader.info(`Found ${svgFiles.length} icons`);
const svgArray = Promise.all(
  svgFiles.map(async (file) => {
    const IconBuffer = await fs.readFile(`./svgs/${file}`, "utf-8");
    const IconName = file.split(".svg")[0];
    const ParsedIcon = parse(IconBuffer);
    ParsedIcon.removeAttribute("xmlns");
    ParsedIcon.removeAttribute("xmlns:xlink");
    ParsedIcon.removeAttribute("version");
    ParsedIcon.removeAttribute("width");
    ParsedIcon.removeAttribute("height");
    const viewBoxRegex =
      /<svg .*?viewBox=["'](-?[\d\.]+[, ]+-?[\d\.]+[, ][\d\.]+[, ][\d\.]+)["']/;
    const styleRegex = /(?<=style=").*?(?=")/;
    loader.info(`Loading ${IconName}`);
    return {
      [IconName ?? ""]: {
        children: getChildren(ParsedIcon.childNodes[0]!),
        style:
          ParsedIcon.childNodes[0]?.toString().match(styleRegex)?.[0] ?? "",
        viewBox: ParsedIcon.childNodes[0]?.toString().match(viewBoxRegex)?.[1],
      },
    };
  })
);

const svgObject: Icons = Object.assign({}, ...(await svgArray));

/**
 * Get children of a node and return them as an array
 * @param item Node
 * @returns IconChildren[]
 */
function getChildren(item: Node): IconChildren[] {
  if (item.childNodes.length === 0) return [];

  return [
    ...item.childNodes
      .map((itemChildren) => {
        const rawAttributeRegex = new RegExp(
          `(?<=<${itemChildren.rawTagName}).*?(?=>)`
        );
        const kebabRegex = new RegExp(/(\w+)-(\w)([\w-]*)/g);
        const attributeRegex = new RegExp(/\s(\w+?)="(.+?)"/g);
        let rawAttribute =
          itemChildren.toString().match(rawAttributeRegex)?.[0] ?? "";

        const attributes: IconChildren["attributes"] = {};

        [...rawAttribute.matchAll(kebabRegex)].map((item) => {
          rawAttribute = rawAttribute.replace(
            item[0],
            item[0].replace(/-./g, (x) => x[1]!.toUpperCase())
          );
        });

        [...rawAttribute.matchAll(attributeRegex)].forEach((item) => {
          Object.assign(attributes, {
            [item[1] ?? ""]: item[2],
          });
        });
        return {
          attributes: attributes,
          children: getChildren(itemChildren),
          tag: itemChildren.rawTagName,
        };
      })
      .filter((item) => item.tag !== ""),
  ];
}

const types = `export type Icons = \n\t${Object.keys(svgObject)
  .map((iconName) => `| "${iconName}" \n\t`)
  .join("")};`;

const icons = `export const icons = ${JSON.stringify(svgObject, null, 2)};`;

await fs.outputFile("./icons/types.ts", types);
loader.info("Types file done");
await fs.outputFile("./icons/index.ts", icons);
loader.info("Icons file done");

loader.succeed(
  `Found ${svgFiles.length} icons and added ${Object.keys(svgObject).length}`
);
