import { useWindowSize } from "@gespenst/ui/lib";

/**
 * Example component that uses the `useWindowSize` hook.
 * @returns JSX.Element
 */
export function Example() {
  const { height, width } = useWindowSize();

  return (
    <div>
      Window width: {width}
      <br />
      Window height: {height}
    </div>
  );
}
