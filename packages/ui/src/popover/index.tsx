import { forwardRef } from "react";
import {
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
} from "react-aria-components";

import { cn } from "../lib";

import type { PopoverProps } from "./types";

/**
 * PopoverTrigger component
 * @param PopoverTriggerProps - All react-aria-components DialogTrigger props and some additional props.
 * @returns JSX.Element
 * @example
 *  <PopoverTrigger>
 *    <Button>Open Popover</Button>
 *    <Popover>
 *      <Text>Popover Content</Text>
 *    </Popover>
 *  </PopoverTrigger>
 */
const PopoverTrigger = AriaDialogTrigger;

/**
 * Popover component
 * @param PopoverProps - All react-aria-components Popover props and some additional props.
 * @param PopoverProps.className - To style the Popover. (additional class will get merged by cn())
 * @param PopoverProps.offset - The offset of the Popover. (default: 7)
 * @returns JSX.Element
 * @example
 *  <PopoverTrigger>
 *    <Button>Open Popover</Button>
 *    <Popover>
 *      <Text>Popover Content</Text>
 *    </Popover>
 *  </PopoverTrigger>
 */
const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, offset = 7, ...rest }, ref) => {
    return (
      <AriaPopover
        className={(values) =>
          cn(
            "bg-popover text-popover-foreground data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 inner-border z-50 w-72 overflow-y-auto rounded-xl outline-none",
            typeof className === "function" ? className(values) : className
          )
        }
        offset={offset}
        ref={ref}
        {...rest}
      />
    );
  }
);
Popover.displayName = "Popover";

export { Popover, PopoverTrigger };
