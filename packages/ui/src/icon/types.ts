import type { HTMLAttributes, ReactNode } from "react";

import type { Icons } from "./icons/types";

export type { Icons };

export type IconsType = Record<
  string,
  {
    children: IconChildren[];
    style: string;
    viewBox: string;
  }
>;

export interface IconChildren {
  attributes: Record<string, string>;
  children: IconChildren[];
  tag: string;
}

export interface IconGenealProps extends HTMLAttributes<HTMLSpanElement> {
  containerClassName?: string;
  name: Icons;
}

export type IconProps = (
  | {
      children: ReactNode | ReactNode[];
    }
  | {
      children?: undefined;
      containerClassName?: undefined;
    }
) &
  IconGenealProps;
