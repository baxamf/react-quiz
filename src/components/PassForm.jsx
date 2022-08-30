import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlayerName } from "../features/quiz/quizSlice";

export default function PassForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const startQuiz = () => {
    dispatch(setPlayerName(name));
  };

  return (
    <>
      <Button variant="outlined" size="large" onClick={() => navigate("/")}>
        Back to home page
      </Button>
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
