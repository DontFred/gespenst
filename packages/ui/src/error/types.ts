import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import type { IconGenealProps } from "../icon";

import type { errorVariants } from ".";

export type ErrorProps = {
  children?: ReactNode;
  error?: ErrorProperty;
  label?: string;
} & Omit<IconGenealProps, "name"> &
  VariantProps<typeof errorVariants>;

export interface ErrorProperty {
  action?: string;
  label?: string;
  link?: string;
  message?: string;
}
