import { forwardRef, Fragment } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
} from "react-aria-components";

import { cn } from "../lib";

import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components";

import type { CheckboxProps } from "./types";

const CheckboxGroup = forwardRef<HTMLDivElement, AriaCheckboxGroupProps>(
  ({ className, ...rest }, ref) => {
    return (
      <AriaCheckboxGroup
        className={cn("flex flex-col gap-4", className)}
        ref={ref}
        {...rest}
      />
    );
  }
);

/**
 * Checkbox component
 * @param CheckboxProps - props of Checkbox
 * @returns JSX.Element
 */
const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, className, isDisabled, isIndeterminate, ...rest }, ref) => {
    return (
      <AriaCheckbox
        className={cn(
          "group inline-flex cursor-pointer items-center text-[13px] data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-500",
          className
        )}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        ref={ref}
        {...rest}
      >
        {(values) => (
          <Fragment>
            <div
              className={cn(
                "bg-background border-gray-[--checkbox-color] relative inline-flex h-4 w-4 items-center justify-center rounded-sm border transition-[border-color,_background,_box-shadow] [--checkbox-color:--gespenst-gray-700]",
                !isIndeterminate &&
                  "group-data-[selected]:bg-[hsl(var(--checkbox-color))] group-data-[selected]:[--checkbox-color:--gespenst-gray-1000]",
                isDisabled &&
                  "[--checkbox-color:--gespenst-gray-500] group-data-[selected]:[--checkbox-color:--gespenst-gray-600]"
              )}
            >
              <svg
                className="flex-shrink-0"
                fill="none"
                height={16}
                viewBox="0 0 20 20"
                width={16}
              >
                {!isIndeterminate ? (
                  <path
                    className="invisible group-data-[selected]:visible"
                    d="M14 7L8.5 12.5L6 10"
                    stroke="hsl(var(--gespenst-background))"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                ) : (
                  <line
                    className="invisible group-data-[indeterminate]:visible"
                    stroke="hsl(var(--checkbox-color))"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    x1={5}
                    x2={15}
                    y1={10}
                    y2={10}
                  />
                )}
              </svg>
            </div>
            {children && (
              <span className="ml-2">
                {typeof children === "function" ? children(values) : children}
              </span>
            )}
          </Fragment>
        )}
      </AriaCheckbox>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, CheckboxGroup };
