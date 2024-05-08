import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { Button as ArialButton } from "react-aria-components";

import { cn } from "../lib";

import type { ButtonProps } from "./types";

export const buttonVariants = cva(
  "flex max-w-full items-center justify-center transition-colors",
  {
    defaultVariants: {
      size: "normal",
      variant: "primary",
    },
    variants: {
      size: {
        large: "h-12 rounded-md px-3.5 text-base font-medium",
        normal: "h-10 rounded-md px-2.5 text-sm font-medium",
        small: "h-8 rounded-md px-1.5 text-sm font-medium",
      },
      variant: {
        error: "bg-red-800 text-[#fff] hover:bg-red-700",
        info: "bg-blue-800 text-[#fff] hover:bg-blue-700",
        primary: "bg-primary hover:bg-primary-hover text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary-hover text-secondary-foreground border",
        tertiary: "hover:bg-secondary-hover text-secondary-foreground",
        warning: "bg-amber-800 text-[#000] hover:bg-amber-700",
      },
    },
  }
);
/**
 * Button component
 * @param Button - props
 * @param Button.children - ReactNode
 * @param Button.className - string
 * @param Button.variant
 * @param Button.size
 * @returns JSX.Element
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size, variant, ...other }, ref) => {
    return (
      <ArialButton
        className={(values) =>
          cn(
            buttonVariants({
              className:
                typeof className === "function" ? className(values) : className,
              size,
              variant,
            })
          )
        }
        ref={ref}
        {...other}
      >
        <span className="inline-block overflow-hidden text-ellipsis whitespace-nowrap px-1.5">
          {children}
        </span>
      </ArialButton>
    );
  }
);

Button.displayName = "Button";
