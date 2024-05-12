import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "../lib";

import type { CardProps } from "./types";

export const cardVariants = cva("bg-card inner-border overflow-hidden", {
  defaultVariants: {
    padding: "normal",
    rounded: "normal",
  },
  variants: {
    padding: {
      large: "p-6",
      none: "p-0",
      normal: "p-4",
    },
    rounded: {
      large: "rounded-xl",
      none: "",
      normal: "rounded-lg",
      small: "rounded-md",
      xsmall: "rounded-sm",
    },
  },
});

/**
 * Card component
 * @param CardProps - Uses all HTMLDivElement attributes
 * @param CardProps.children - to set the children of the card
 * @param CardProps.className - The additional class name of the Card. (additional class will get merged by cn())
 * @param CardProps.rounded - The rounded variant of the Card. (default: normal) (options: large, none, normal, small, xsmall)
 * @param CardProps.padding - The padding variant of the Card. (default: normal) (options: large, none, normal)
 * @returns JSX.Element
 * @example
 *  <Card>
 *    <Text heading size="h3">Card Heading</Text>
 *    <Text paragraph>Card Description</Text>
 *  </Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, padding, rounded, ...rest }, ref) => {
    return (
      <div
        className={cn(cardVariants({ padding, rounded }), className)}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
