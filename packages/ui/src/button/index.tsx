import { cn } from "../lib";

import type { ButtonProps } from "./types";

/**
 * Button component
 * @param Button - props
 * @param Button.children - ReactNode
 * @param Button.className - string
 * @returns JSX.Element
 */
export function Button({ children, className, ...other }: ButtonProps) {
  return (
    <button
      className={cn("border-border border p-2", className)}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
