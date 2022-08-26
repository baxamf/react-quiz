import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function QuizLayout() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Outlet />
    </Grid>
  );
}
