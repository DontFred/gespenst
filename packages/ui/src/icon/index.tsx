import { forwardRef } from "react";

import { cn } from "../lib";

import { icons } from "./icons";

import type { IconChildren, IconGenealProps, IconProps } from "./types";

export type { Icons as IconName } from "./icons/types";
export type { IconGenealProps, IconProps };
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
            `${key === "gradientUnits" || key === "maskUnits" ? key : key.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (word, whitePlace) => (whitePlace ? "-" : "") + word.toLowerCase())}="${value}"`
        )
        .join(" ");
      return `<${child.tag} ${attributes}>${renderChildren(child.children)}</${child.tag}>`;
    })
    .join("");
}

/**
 * Icon
 * @param IconProps - Has all SVGProps<SVGSVGElement>
 * @param IconProps.children - Normally a string to give the icon a label
 * @param IconProps.className - To style the SVG element
 * @param IconProps.name - IconName from icon-types.ts e. g. "accessibility"
 * @param IconProps.containerClassName - To style the container of the icon and children. Only used when children are present
 * @returns JSX.Element
 * @example
 *  <Icon className="h-6 w-6" name="accessibility"/>
 *  ...
 *  <Icon className="h-6 w-6" name="accessibility">
 *    <Text className="font-semibold" paragraph>Accessibility</Text>
 *  </Icon>
 */
const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ children, className, containerClassName, name, ...rest }, ref) => {
    const IconProperties = icons[name];
    if (children) {
      return (
        <span
          className={cn(
            "font inline-flex items-center gap-1.5",
            containerClassName
          )}
          ref={ref}
        >
          <Icon className={className} name={name} {...rest} />
          {children}
        </span>
      );
    }
    return (
      <span
        className={cn("h-4 w-4 self-center", className)}
        ref={ref}
        {...rest}
        dangerouslySetInnerHTML={{
          __html: `<svg viewBox="${IconProperties.viewBox}" width="100%" height="100%"  stroke-linejoin="round">${renderChildren(IconProperties.children)}</svg>`,
        }}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
