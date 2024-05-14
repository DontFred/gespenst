import { useEffect, useState } from "react";

import type { HooksUseWindowSizeReturn } from "./types";

export * from "./types";

/**
 * useWindowSize hook
 * @description When the window is undefined, the height and width are also undefined.
 * @returns \{ height?: undefined, width?: undefined }
 * @example
 * const { height, width } = useWindowSize();
 */
export function useWindowSize(): HooksUseWindowSizeReturn {
  const [windowSize, setWindowSize] = useState<HooksUseWindowSizeReturn>({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    /**
     * Event handler to update window size in state
     */
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
