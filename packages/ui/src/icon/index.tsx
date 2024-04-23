import { cn } from "../lib";

import { icons } from "./icons";

import type { IconChildren, IconProps } from "./types";

/**
 * renderChildren - Turns IconChildren into a html string
 * @param children IconChildren[]
 * @returns string
 */
function renderChildren(children: IconChildren[]): string {
  return children
    .map((child) => {
      const attributes = Object.entries(child.attributes)
        .map(
          ([key, value]) =>
            // Convert camelCase to kebab-case
            `${key.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (word, whitePlace) => (whitePlace ? "-" : "") + word.toLowerCase())}="${value}"`
        )
        .join(" ");
      return `<${child.tag} ${attributes}>${renderChildren(child.children)}</${child.tag}>`;
    })
    .join("");
}

/**
 * Icon
 * @param Icon - Has all SVGProps<SVGSVGElement>
 * @param Icon.children - Normally a string to give the icon a label
 * @param Icon.className - To style the SVG element
 * @param Icon.name - IconName from icon-types.ts e. g. "accessibility"
 * @param Icon.containerClassName - To style the container of the icon and children. Only used when children are present
 * @returns JSX.Element
 * @example
 *  <Icon className="h-6 w-6" name="accessibility"/>
 *  ...
 *  <Icon className="h-6 w-6" name="accessibility">
 *    <div>Accessibility</div>
 *  </Icon>
 */
export function Icon({
  children,
  className,
  containerClassName,
  name,
  ...rest
}: IconProps) {
  const IconProperties = icons[name];
  if (children) {
    return (
      <span
        className={cn(
          "font inline-flex items-center gap-1.5",
          containerClassName
        )}
      >
        <Icon className={className} name={name} {...rest} />
        {children}
      </span>
    );
  }
  return (
    <span
      className={cn("inline h-4 w-4 self-center", className)}
      {...rest}
      dangerouslySetInnerHTML={{
        __html: `<svg viewBox="${IconProperties.viewBox}" width="100%" height="100%"  stroke-linejoin="round">${renderChildren(IconProperties.children)}</svg>`,
      }}
    ></span>
  );
}
