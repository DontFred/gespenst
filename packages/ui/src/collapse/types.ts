import type { Content, Item, Root, Trigger } from "@radix-ui/react-accordion";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

export type CollapseElementRef = ElementRef<typeof Root>;

export type CollapseProps = ComponentPropsWithoutRef<typeof Root>;

export interface CollapseAdditionalProps {
  size?: "default" | "small";
}

export type CollapseItemElementRef = ElementRef<typeof Item>;

export type CollapseItemProps = ComponentPropsWithoutRef<typeof Item>;

export type CollapseTriggerElementRef = ElementRef<typeof Trigger>;

export type CollapseTriggerProps = ComponentPropsWithoutRef<typeof Trigger>;

export type CollapseContentElementRef = ElementRef<typeof Content>;

export type CollapseContentProps = ComponentPropsWithoutRef<typeof Content>;
