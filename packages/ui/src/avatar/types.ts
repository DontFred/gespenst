import type { ComponentType, HTMLAttributes } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  children?: never;
  fallback?: string;
  fallbackClassName?: string;
  imageClassName?: string;
  name: string;
  NextImage?: ComponentType<NextImageProps>;
  placeholder?: false;
  src: NextImageStaticImport | string;
}

export interface AvatarPlaceholderProps
  extends HTMLAttributes<HTMLSpanElement> {
  children?: never;
  fallback?: undefined;
  fallbackClassName?: undefined;
  imageClassName?: undefined;
  name?: undefined;
  NextImage?: undefined;
  placeholder: true;
  src?: undefined;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  className?: string;
  fallbackClassName?: string;
  groupClassName?: string;
  groupItemClassName?: string;
  imageClassName?: string;
  limit?: number;
  members: {
    fallback?: string;
    name: string;
    src: NextImageStaticImport | string;
  }[];
  NextImage?: ComponentType<NextImageProps>;
}

type NextImageProps = {
  alt: string;
  blurDataURL?: string;
  fill?: boolean;
  height?: `${number}` | number;
  layout?: string;
  lazyBoundary?: string;
  lazyRoot?: string;
  loader?: (p: { quality?: number; src: string; width: number }) => string;
  loading?: "eager" | "lazy" | undefined;
  objectFit?: string;
  objectPosition?: string;
  onLoadingComplete?: (img: HTMLImageElement) => void;
  overrideSrc?: string;
  placeholder?: "blur" | "empty" | `data:image/${string}`;
  priority?: boolean;
  quality?: `${number}` | number;
  src: NextImageStaticImport | string;
  unoptimized?: boolean;
  width?: `${number}` | number;
} & Omit<
  JSX.IntrinsicElements["img"],
  "alt" | "height" | "loading" | "ref" | "src" | "srcSet" | "width"
>;

type NextImageStaticImport =
  | {
      blurDataURL?: string;
      blurHeight?: number;
      blurWidth?: number;
      height: number;
      src: string;
      width: number;
    }
  | {
      default: {
        blurDataURL?: string;
        blurHeight?: number;
        blurWidth?: number;
        height: number;
        src: string;
        width: number;
      };
    };

// interface NextImageStaticRequire {
//   default: NextImageStaticImageData;
// }

// interface NextImageStaticImageData {
//   blurDataURL?: string;
//   blurHeight?: number;
//   blurWidth?: number;
//   height: number;
//   src: string;
//   width: number;
// }
