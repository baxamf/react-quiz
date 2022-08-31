import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SwitchTheme from "./components/common/SwitchTheme";
import TopNavBar from "./components/common/TopNavBar";

function App() {
  return (
    <SwitchTheme>
      <Grid bgcolor="background.default" className="App">
        <TopNavBar />
        <Outlet />
      </Grid>
    </SwitchTheme>
  );
}

export default App;
