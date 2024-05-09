import { cva } from "class-variance-authority";
import { forwardRef, Fragment } from "react";
import { Button as ArialButton } from "react-aria-components";

import { cn } from "../lib";
import { LoadSpinner } from "../load-spinner";

import type { ButtonProps, SvgButtonProps } from "./types";

export const iconButtonVariants = cva("p-0", {
  defaultVariants: {
    size: "normal",
  },
  variants: {
    size: {
      large: "h-12 w-12 rounded-lg",
      normal: "h-10 w-10 rounded-md",
      small: "h-8 w-8 rounded-md",
      xsmall: "h-6 w-6 rounded-sm",
    },
  },
});

export const buttonVariants = cva(
  "focus:ring-primary focus:ring-offset-background focus-visible:ring-offset-background disabled:inner-border disabled:inner-border-gray-400 flex max-w-full items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-700",
  {
    defaultVariants: {
      shape: "angular",
      size: "normal",
      variant: "primary",
    },
    variants: {
      shape: {
        angular: "rounded-md",
        rounded: "rounded-full",
      },
      size: {
        large: "h-12 px-3.5 text-base",
        normal: "h-10 px-2.5 text-sm",
        small: "h-8 px-1.5 text-sm",
      },
      variant: {
        error: "bg-red-800 text-white shadow-red-800 hover:bg-red-900",
        info: "bg-blue-800 text-white hover:bg-blue-900",
        primary: "bg-primary hover:bg-primary-hover text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary-hover text-secondary-foreground inner-border",
        tertiary: "hover:bg-secondary-hover text-secondary-foreground",
        warning: "bg-amber-800 text-black hover:bg-[#d27504]",
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
export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps | SvgButtonProps
>(
  (
    {
      children,
      className,
      isDisabled,
      loading,
      prefix,
      shape,
      size,
      suffix,
      svgOnly,
      variant,
      ...other
    },
    ref
  ) => {
    return (
      <ArialButton
        children={(values) =>
          typeof children === "function" ? (
            <Fragment>
              {(prefix ?? loading) && (
                <span className="mr-0.5 flex min-w-5 flex-shrink-0 items-center justify-center">
                  {loading ? (
                    <LoadSpinner
                      className={cn(
                        "text-accents-5 h-4 w-4",
                        size === "large" && "h-6 w-6"
                      )}
                    />
                  ) : (
                    prefix
                  )}
                </span>
              )}
              <span
                className={cn(
                  "inline-block overflow-hidden text-ellipsis whitespace-nowrap px-1.5",
                  svgOnly && "flex w-full items-center justify-center"
                )}
              >
                {children(values)}
              </span>
              {!loading && suffix && (
                <span className="ml-0.5 flex min-w-5 flex-shrink-0 items-center justify-center">
                  {suffix}
                </span>
              )}
            </Fragment>
          ) : (
            <Fragment>
              {(prefix ?? loading) && (
                <span className="mr-0.5 flex min-w-5 flex-shrink-0 items-center justify-center">
                  {loading ? (
                    <LoadSpinner
                      className={cn(
                        "text-accents-5 h-4 w-4",
                        size === "large" && "h-6 w-6"
                      )}
                    />
                  ) : (
                    prefix
                  )}
                </span>
              )}
              <span
                className={cn(
                  "inline-block overflow-hidden text-ellipsis whitespace-nowrap px-1.5",
                  svgOnly && "flex items-center justify-center px-1.5"
                )}
              >
                {children}
              </span>
              {!loading && suffix && (
                <span className="ml-0.5 flex min-w-5 flex-shrink-0 items-center justify-center">
                  {suffix}
                </span>
              )}
            </Fragment>
          )
        }
        className={(values) =>
          cn(
            buttonVariants({
              className:
                typeof className === "function" ? className(values) : className,
              shape,
              size: !svgOnly ? size : undefined,
              variant,
            }),
            svgOnly && iconButtonVariants({ size })
          )
        }
        isDisabled={isDisabled ?? loading}
        ref={ref}
        {...other}
      />
    );
  }
);

Button.displayName = "Button";
