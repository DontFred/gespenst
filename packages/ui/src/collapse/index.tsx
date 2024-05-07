"use client";

import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { forwardRef } from "react";

import { Icon } from "../icon";
import { cn } from "../lib";
import { Text } from "../text";

import type {
  CollapseAdditionalProps,
  CollapseContentElementRef,
  CollapseContentProps,
  CollapseElementRef,
  CollapseItemElementRef,
  CollapseItemProps,
  CollapseProps,
  CollapseTriggerElementRef,
  CollapseTriggerProps,
} from "./types";

const Collapse = forwardRef<
  CollapseElementRef,
  CollapseAdditionalProps & CollapseProps
>(({ children, className, size = "default", ...rest }, ref) => (
  <Root className={cn("border-t", className)} ref={ref} {...rest}>
    {size === "small" && <Text paragraph>{children}</Text>}
    {size === "default" && (
      <Text heading size="h3">
        {children}
      </Text>
    )}
  </Root>
));

Collapse.displayName = "Collapse";

const CollapseItem = forwardRef<CollapseItemElementRef, CollapseItemProps>(
  ({ className, ...rest }, ref) => (
    <Item className={cn("border-b", className)} ref={ref} {...rest} />
  )
);

CollapseItem.displayName = "CollapseItem";

const CollapseTrigger = forwardRef<
  CollapseTriggerElementRef,
  CollapseTriggerProps
>(({ children, className, ...rest }, ref) => (
  <Header className="flex">
    <Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
      <Icon
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        name="chevron-down"
      />
    </Trigger>
  </Header>
));

CollapseTrigger.displayName = Trigger.displayName;

const CollapseContent = forwardRef<
  CollapseContentElementRef,
  CollapseContentProps
>(({ children, className, ...rest }, ref) => (
  <Content
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
    ref={ref}
    {...rest}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Content>
));

CollapseContent.displayName = Content.displayName;

export { Collapse, CollapseContent, CollapseItem, CollapseTrigger };
