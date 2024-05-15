import { forwardRef } from "react";

import { cn } from "../lib";

import type { SkeletonProps } from "./types";

/**
 * Skeleton component
 * @param SkeletonProps - props of Skeleton
 * @returns JSX.Element
 */
const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  (
    {
      angular,
      animated = true,
      boxHeight,
      children,
      className,
      height,
      rounded,
      show = true,
      style,
      width,
      ...rest
    },
    ref
  ) => {
    return (
      <span
        className={cn(
          "relative",
          !angular && "rounded",
          rounded && "rounded-full",
          show &&
            (children
              ? "after:bg-skeleton after:animate-skeleton after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded after:bg-[length:400%_100%]"
              : "bg-skeleton animate-skeleton block bg-[length:400%_100%]"),
          !animated && "animate-none",
          className
        )}
        ref={ref}
        style={{
          height: height ? height : !children ? 24 : undefined,
          marginBottom: boxHeight
            ? boxHeight - (height ? height : 24)
            : undefined,
          width: width ? width : !children ? 160 : undefined,
          ...style,
        }}
        {...rest}
      >
        {children}
      </span>
    );
  }
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
