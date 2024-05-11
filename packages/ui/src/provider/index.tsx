"use client";

import { Fragment } from "react";

import { ThemeProvider } from "./theme-provider";

import type { ProviderProps } from "./types";

// import "../style.css";

export { useTheme as useProviderThemeUseTheme } from "./theme-provider";

/**
 * Provider
 * @param ProviderProps - To control different providers use providerExampleProps
 * @param ProviderProps.children - The children to render. Usually the whole app
 * @param ProviderProps.themeProviderAttribute - The attribute to use ThemeProvider Attribute
 * @param ProviderProps.themeProviderDefaultTheme - The attribute to use ThemeProvider Default Theme
 * @param ProviderProps.themeProviderDisableTransitionOnChange - The attribute to use ThemeProvider Disable Transition On Change
 * @param ProviderProps.themeProviderEnableColorScheme - The attribute to use ThemeProvider Enable Color Scheme
 * @param ProviderProps.themeProviderEnableSystem - The attribute to use ThemeProvider Enable System
 * @param ProviderProps.themeProviderForcedTheme - The attribute to use ThemeProvider Forced Theme
 * @param ProviderProps.themeProviderNonce - The attribute to use ThemeProvider Nonce
 * @param ProviderProps.themeProviderStorageKey - The attribute to use ThemeProvider Storage Key
 * @param ProviderProps.themeProviderThemes - The attribute to use ThemeProvider Themes
 * @param ProviderProps.themeProviderValue - The attribute to use ThemeProvider Value
 * @returns JSX.Element
 * @example
 *  <Provider>
 *      ...
 *  </Provider>
 */
export default function Provider({
  children,
  themeProviderAttribute = "class",
  themeProviderDefaultTheme = "system",
  themeProviderDisableTransitionOnChange = true,
  themeProviderEnableColorScheme,
  themeProviderEnableSystem = true,
  themeProviderForcedTheme,
  themeProviderNonce,
  themeProviderStorageKey,
  themeProviderThemes,
  themeProviderValue,
}: ProviderProps) {
  return (
    <Fragment>
      <ThemeProvider
        attribute={themeProviderAttribute}
        defaultTheme={themeProviderDefaultTheme}
        disableTransitionOnChange={themeProviderDisableTransitionOnChange}
        enableColorScheme={themeProviderEnableColorScheme}
        enableSystem={themeProviderEnableSystem}
        forcedTheme={themeProviderForcedTheme}
        nonce={themeProviderNonce}
        storageKey={themeProviderStorageKey}
        themes={themeProviderThemes}
        value={themeProviderValue}
      >
        {children}
      </ThemeProvider>
    </Fragment>
  );
}
