import type { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  angular?: boolean;
  animated?: boolean;
  boxHeight?: number;
  height?: number;
  rounded?: boolean;
  show?: boolean;
  width?: number;
}
