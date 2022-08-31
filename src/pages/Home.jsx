import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPlayer } from "../features/quiz/quizSlice";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPlayer);
  }, []);

  return (
    <Grid className="grid-container">
      <Button
        size="large"
        variant="contained"
        onClick={() => navigate("create")}
      >
        Create Quiz
      </Button>
      <Button size="large" variant="contained" onClick={() => navigate("pass")}>
        Pass Quiz
      </Button>
    </Grid>
  );
}
