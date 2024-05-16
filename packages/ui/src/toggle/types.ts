import type { VariantProps } from "class-variance-authority";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";

import type { toggleVariants } from ".";

export interface ToggleProps
  extends AriaSwitchProps,
    VariantProps<typeof toggleVariants> {
  indicatorClassName?: string;
  toggleClassName?: string;
}
