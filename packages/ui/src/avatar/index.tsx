import { forwardRef } from "react";

import type { AvatarProps } from "./types";

/**
 * Avatar component
 * @param Avatar - props of Avatar
 * @returns JSX.Element
 */
const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ ...rest }, ref) => {
  return <div ref={ref} {...rest} />;
});
Avatar.displayName = "Avatar";

export { Avatar };
