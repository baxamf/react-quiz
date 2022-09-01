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
        typography: {
          fontFamily: ["Poppins"],
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#012c3d",
                },
                error: {
                  main: "#f8444f",
                },
                background: {
                  default: "#f7f8f3",
                  paper: "#f7f8f3",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#78bdc4",
                },
                background: {
                  default: "#012c3d",
                  paper: "#012c3d",
                },
              }),
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
