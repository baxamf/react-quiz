import { Button, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ThemeSwitcher from "./ThemeSwitcher";
import useBackHome from "../../hooks/useBackHome";

export default function TopNavBar() {
  const backHome = useBackHome();

  return (
    <Grid className="top-nav-bar">
      <Button size="large" startIcon={<HomeIcon />} onClick={backHome}>
        Home
      </Button>
      <ThemeSwitcher />
    </Grid>
  );
}
