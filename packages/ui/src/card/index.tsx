import type { CardProps } from "./types";

/**
 * Card component
 * @param Card - props of Card
 * @returns JSX.Element
 */
export function Card({ ...rest }: CardProps) {
  return <div {...rest} />;
}

Card.displayName = "Card";
