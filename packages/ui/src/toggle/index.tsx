import { cva } from "class-variance-authority";
import { forwardRef, Fragment } from "react";
import { Switch as AriaSwitch } from "react-aria-components";

import { cn } from "../lib";

import type { ToggleProps } from "./types";

export const toggleVariants = cva(
  "group-data-[disabled]:bg-card relative cursor-pointer rounded-full border border-white/15 bg-gray-100 transition-all group-data-[selected]:bg-blue-700",
  {
    defaultVariants: {
      size: "normal",
    },
    variants: {
      size: {
        large: "h-6 w-10",
        normal: "h-3.5 w-7",
      },
    },
  }
);

/**
 * Toggle component
 * @param ToggleProps - props of Toggle
 * @returns JSX.Element
 */
const Toggle = forwardRef<HTMLLabelElement, ToggleProps>(
  (
    {
      children,
      className,
      indicatorClassName,
      isDisabled,
      size,
      toggleClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <AriaSwitch
        className={(values) =>
          cn(
            "group inline-flex items-center gap-2 leading-none data-[disabled]:cursor-not-allowed",
            typeof className === "function" ? className(values) : className
          )
        }
        isDisabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {(values) => (
          <Fragment>
            <div
              className={cn(
                toggleVariants({
                  size,
                }),
                isDisabled &&
                  "group-data-[selected]:bg-accents-1 group-data-[selected]:border-accents-2",
                toggleClassName
              )}
            >
              <div
                className={cn(
                  "group-data-[selected]:bg-gray-1000 pointer-events-none absolute left-0 block aspect-square h-full translate-x-0 rounded-full bg-gray-700 ring-0 transition-all group-data-[selected]:left-full group-data-[selected]:-translate-x-full",
                  isDisabled && "bg-gray-200 group-data-[selected]:bg-gray-200",
                  indicatorClassName
                )}
              />
            </div>
            {typeof children === "function" ? children(values) : children}
          </Fragment>
        )}
      </AriaSwitch>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
