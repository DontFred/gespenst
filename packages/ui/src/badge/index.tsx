import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { Icon } from "../icon";
import { cn } from "../lib";

import type { BadgeProps } from "./types";

export const badgeVariants = cva(
  "font-feature-settings-tnum inline-flex flex-shrink-0 items-center whitespace-nowrap rounded-full font-medium capitalize tabular-nums",
  {
    defaultVariants: {
      size: "normal",
      variant: "gray",
    },
    variants: {
      size: {
        large:
          "h-8 px-3 text-sm [--gespenst-badge-icon-size:16px] [--gespenst-badge-icon-spacing:6px]",
        normal:
          "h-6 px-2.5 text-xs [--gespenst-badge-icon-size:14px] [--gespenst-badge-icon-spacing:4px]",
        small:
          "h-5 px-1.5 text-[11px] [--gespenst-badge-icon-size:11px] [--gespenst-badge-icon-spacing:3px]",
      },
      variant: {
        amber: "bg-amber-700 text-white",
        "amber-subtle": "bg-amber-200 text-amber-900",
        blue: "bg-blue-700 text-white",
        "blue-subtle": "bg-blue-200 text-blue-900",
        gray: "bg-gray-700 text-white",
        "gray-subtle": "text-gray-1000 bg-gray-200",
        green: "bg-green-700 text-white",
        "green-subtle": "bg-green-200 text-green-900",
        inverted: "bg-gray-1000 text-gray-100",
        pink: "bg-pink-700 text-white",
        "pink-subtle": "bg-pink-200 text-pink-900",
        purple: "bg-purple-700 text-white",
        "purple-subtle": "bg-purple-200 text-purple-900",
        red: "bg-red-700 text-white",
        "red-subtle": "bg-red-200 text-red-900",
        teal: "bg-teal-700 text-white",
        "teal-subtle": "bg-teal-200 text-teal-900",
      },
    },
  }
);

/**
 * Badge component
 * @param Badge - props of Badge
 * @returns JSX.Element
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, content, icon, size, variant, ...rest }, ref) => {
    if (children)
      return (
        <div className="relative inline-flex shrink-0">
          {children}
          <span
            className={cn(
              badgeVariants({ size, variant }),
              "border-background absolute right-[5%] top-[5%] origin-center -translate-y-1/2 translate-x-1/2 ",
              className
            )}
            ref={ref}
            {...rest}
          >
            <span className="flex items-center gap-[--gespenst-badge-icon-spacing]">
              {icon && (
                <Icon
                  className="h-[--gespenst-badge-icon-size] w-[--gespenst-badge-icon-size]"
                  name={icon}
                />
              )}
              {content}
            </span>
          </span>
        </div>
      );
    return (
      <span
        className={cn(badgeVariants({ size, variant }), className)}
        ref={ref}
        {...rest}
      >
        <span className="flex items-center gap-[--gespenst-badge-icon-spacing]">
          {icon && (
            <Icon
              className="h-[--gespenst-badge-icon-size] w-[--gespenst-badge-icon-size]"
              name={icon}
            />
          )}
          {content}
        </span>
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
