import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../../features/quiz/quizSlice";

export default function PassForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const startQuiz = (e) => {
    e.preventDefault();
    dispatch(setPlayerName(name));
  };

  return (
    <Box display="grid" gap={2} component="form" onSubmit={startQuiz}>
      <TextField
        required
        id="outlined-basic"
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={onChangeName}
      />
      <Button type="submit" variant="contained" size="large">
        Start Quiz
      </Button>
    </Box>
  );
}
