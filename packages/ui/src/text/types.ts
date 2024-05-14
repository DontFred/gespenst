import type { ComponentType, HTMLAttributes, LegacyRef } from "react";

export interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  blockquote: true;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLQuoteElement>;
  size?: false;
  small?: false;
}

export interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
  blockquote?: false;
  code?: false;
  description: true;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLDivElement>;
  size?: "h1" | "h2" | "h3" | "h4";
  small?: false;
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading: true;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLHeadingElement>;
  size?: "h1" | "h2" | "h3" | "h4";
  small?: false;
}

export interface InlineCodeProps extends HTMLAttributes<HTMLElement> {
  blockquote?: false;
  code: true;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLElement>;
  size?: false;
  small?: false;
}

export interface LargeProps extends HTMLAttributes<HTMLDivElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large: true;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLDivElement>;
  size?: false;
  small?: false;
}

export interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead: true;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLParagraphElement>;
  size?: false;
  small?: false;
}

export interface LinkProps extends HTMLAttributes<HTMLSpanElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link: true;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLSpanElement>;
  size?: false;
  small?: false;
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem: true;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLLIElement>;
  size?: false;
  small?: false;
}

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list: true;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLUListElement>;
  size?: false;
  small?: false;
}

export interface MutedProps extends HTMLAttributes<HTMLDivElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted: true;
  paragraph?: false;
  ref?: LegacyRef<HTMLDivElement>;
  size?: false;
  small?: false;
}

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph: true;
  ref?: LegacyRef<HTMLParagraphElement>;
  size?: false;
  small?: false;
}

export interface SmallProps extends HTMLAttributes<HTMLElement> {
  blockquote?: false;
  code?: false;
  description?: false;
  heading?: false;
  large?: false;
  lead?: false;
  link?: false;
  list?: false;
  listItem?: false;
  mono?: boolean;
  muted?: false;
  paragraph?: false;
  ref?: LegacyRef<HTMLElement>;
  size?: false;
  small: true;
}

export type TypoProps =
  | BlockquoteProps
  | DescriptionProps
  | HeadingProps
  | InlineCodeProps
  | LargeProps
  | LeadProps
  | LinkProps
  | ListItemProps
  | ListProps
  | MutedProps
  | ParagraphProps
  | SmallProps;

export type TypoComponent = ComponentType<TypoProps>;

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  container?: HTMLAttributes<HTMLDivElement>;
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableCellElement> {}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}
