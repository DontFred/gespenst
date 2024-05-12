import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import type { IconName } from "../icon";

import type { badgeVariants } from ".";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  content: string;
  icon?: IconName;
}
