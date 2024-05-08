import { ThemeProvider as NextThemesProvider } from "next-themes";

import type { ThemeProviderProps } from "./types";

export { useTheme } from "next-themes";

/**
 * ThemeProvider
 * @param ThemeProviderProps - Has all the props from next-themes
 * @param ThemeProviderProps.children - The children to render. Usually the whole app
 * @returns JSX.Element
 * @example
 *  <ThemeProvider
 *   attribute="class"
 *   defaultTheme="system"
 *   enableSystem={true}
 *  >
 *    ...
 *  </ThemeProvider>
 */
export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}
