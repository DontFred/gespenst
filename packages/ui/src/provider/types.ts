import type { ReactNode } from "react";

import type { ThemeProviderProps } from "./theme-provider/types";

export interface ProviderProps {
  children?: ReactNode | ReactNode[];
  themeProviderAttribute?: ThemeProviderProps["attribute"];
  themeProviderDefaultTheme?: ThemeProviderProps["defaultTheme"];
  themeProviderDisableTransitionOnChange?: ThemeProviderProps["disableTransitionOnChange"];
  themeProviderEnableColorScheme?: ThemeProviderProps["enableColorScheme"];
  themeProviderEnableSystem?: ThemeProviderProps["enableSystem"];
  themeProviderForcedTheme?: ThemeProviderProps["forcedTheme"];
  themeProviderNonce?: ThemeProviderProps["nonce"];
  themeProviderStorageKey?: ThemeProviderProps["storageKey"];
  themeProviderThemes?: ThemeProviderProps["themes"];
  themeProviderValue?: ThemeProviderProps["value"];
}
