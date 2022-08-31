import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";
import { ColorModeContext } from "./SwitchTheme";

export default function ThemeSwitcher() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Button onClick={colorMode.switchTheme}>
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </Button>
  );
}
