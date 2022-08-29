import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "../features/quiz/questionSlice";
import { setPlayerName } from "../features/quiz/quizSlice";

export default function PassForm({ firstQuestion }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const startQuiz = () => {
    dispatch(setPlayerName(name));
  };

  return (
    <>
      <TextField
        required
        id="outlined-basic"
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={onChangeName}
      />
      <Button variant="contained" size="large" onClick={startQuiz}>
        Start Quiz
      </Button>
    </>
  );
}
