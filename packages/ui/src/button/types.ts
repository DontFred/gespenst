import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import type { buttonVariants, iconButtonVariants } from ".";

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  svgOnly?: false;
}

export interface SvgButtonProps
  extends Omit<Omit<ButtonProps, "svgOnly">, "size">,
    VariantProps<typeof iconButtonVariants> {
  loading?: boolean;
  prefix?: undefined;
  suffix?: undefined;
  svgOnly: true;
}
