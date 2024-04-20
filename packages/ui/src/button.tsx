import { cn } from "./lib";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.className
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
