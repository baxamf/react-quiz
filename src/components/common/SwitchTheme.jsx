import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ switchTheme: () => {} });

export default function SwitchTheme({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      switchTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
