import { Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPlayer } from "../features/quiz/quizSlice";

export default function FinalScore({ name, score, question }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = localStorage.getItem(name);
    const previousResults = storage ? JSON.parse(storage) : [];
    const updatedResults = [...previousResults, { score, question }];
    localStorage.setItem(name, JSON.stringify(updatedResults));
    console.log(storage);
  }, []);

  const quit = () => {
    dispatch(resetPlayer());
    navigate("/");
  };

  return (
    <Grid container display="grid">
      <Typography>
        {name}'s final score: {score} / {question}
      </Typography>
      <Button variant="outlined" size="large" onClick={quit}>
        Back to home page
      </Button>
    </Grid>
  );
}
