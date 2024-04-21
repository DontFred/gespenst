import { cn } from "./lib";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 * Button component
 * @param Button - props
 * @param Button.children - ReactNode
 * @param Button.className - string
 * @returns JSX.Element
 */
export function Button({
  children,
  className,
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn("border-border p-2", className)}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
