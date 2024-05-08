import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import type { buttonVariants } from ".";

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
