import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import type { cardVariants } from ".";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}
