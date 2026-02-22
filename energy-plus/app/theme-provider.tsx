
"use client";

import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import type { PaletteMode } from "@mui/material";

type ThemeModeContextValue = {
  mode: PaletteMode;
  toggleMode: () => void;
  setSystemMode: () => void;
};

export const ThemeModeContext = React.createContext<ThemeModeContextValue>({
  mode: "light",
  toggleMode: () => {},
  setSystemMode: () => {},
});

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  // Load saved theme on first mount
  React.useEffect(() => {
    const saved = window.localStorage.getItem("themeMode");
    if (saved === "light" || saved === "dark") {
      setMode(saved);
    } else {
      // system default
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
      setMode(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const next: PaletteMode = prev === "light" ? "dark" : "light";
      window.localStorage.setItem("themeMode", next);
      return next;
    });
  };

  const setSystemMode = () => {
    window.localStorage.removeItem("themeMode");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setMode(prefersDark ? "dark" : "light");
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode, setSystemMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}