import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { Icon } from "../icon";
import { cn } from "../lib";

import type { ErrorProps } from "./types";

export const errorVariants = cva("text-red-900", {
  defaultVariants: {
    size: "normal",
  },
  variants: {
    size: {
      large: "text-base",
      normal: "text-sm",
      small: "text-[13px]",
    },
  },
});

/**
 * Error component
 * @param ErrorProps - All Icon props and some additional props.
 * @param ErrorProps.children - The children of the Error.
 * @param ErrorProps.className - To style the Error. (additional class will get merged by cn())
 * @param ErrorProps.error - The error object.
 * @param ErrorProps.label - The label of the Error.
 * @param ErrorProps.size - The size of the Error. (default: "normal")
 * @returns JSX.Element
 * @example
 *   <Error>Something went wrong</Error>
 */
const Error = forwardRef<HTMLSpanElement, ErrorProps>(
  (
    { children, className, containerClassName, error, label, size, ...rest },
    ref
  ) => {
    return (
      <Icon
        className={className}
        containerClassName={cn(errorVariants({ size }), containerClassName)}
        name="stop"
        ref={ref}
        {...rest}
      >
        {(error?.label ?? label) && <b>{error?.label ?? label}: </b>}
        {error?.message ?? children}
        {error?.link && (
          <a
            className="inline-flex items-center gap-0.5 bg-gradient-to-r from-current to-current bg-[length:100%_1px] bg-bottom bg-no-repeat font-medium transition-opacity hover:opacity-60"
            href={error?.link}
          >
            {error?.action ?? "Learn more"}
            <Icon name="external-small" />
          </a>
        )}
      </Icon>
    );
  }
);
Error.displayName = "Error";

export { Error };
