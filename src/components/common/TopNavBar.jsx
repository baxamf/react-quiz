import { Button, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ThemeSwitcher from "./ThemeSwitcher";
import useBackHome from "../../hooks/useBackHome";
import { useDispatch, useSelector } from "react-redux";
import { resetPlayer, selectQuiz } from "../../features/quiz/quizSlice";

export default function TopNavBar() {
  const backHome = useBackHome();
  const dispatch = useDispatch();
  const { name } = useSelector(selectQuiz);

  const logout = () => {
    dispatch(resetPlayer());
    backHome();
  };

  return (
    <Grid className="top-nav-bar">
      <Button size="large" startIcon={<HomeIcon />} onClick={backHome}>
        Home
      </Button>
      <ThemeSwitcher />
      {name && <Button onClick={logout}>Logout</Button>}
    </Grid>
  );
}
