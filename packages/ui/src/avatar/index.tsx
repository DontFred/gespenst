import type { AvatarProps } from "./types";

/**
 * Avatar component
 * @param Avatar - props of Avatar
 * @returns JSX.Element
 */
export function Avatar({ ...rest }: AvatarProps) {
  return <div {...rest} />;
}

Avatar.displayName = "Avatar";
