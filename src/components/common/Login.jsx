import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../../features/quiz/quizSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const playerLogin = (e) => {
    e.preventDefault();
    dispatch(setPlayerName(name));
  };

  return (
    <Box className="grid-container" component="form" onSubmit={playerLogin}>
      <TextField
        required
        id="outlined-basic"
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={onChangeName}
      />
      <Button type="submit" variant="contained" size="large">
        Login
      </Button>
    </Box>
  );
}
