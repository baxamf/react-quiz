import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { delAnswer, setAnswers } from "../features/quiz/questionSlice";

export default function FormAnswer({ answer }) {
  const dispatch = useDispatch();

  const answerTextHandler = (e) => {
    dispatch(setAnswers({ ...answer, answerTitle: e.target.value }));
  };

  const correctHandler = (e) => {
    dispatch(setAnswers({ ...answer, isCorrect: !answer.isCorrect }));
  };

  return (
    <Grid container justifyContent="space-between" gap={2}>
      <TextareaAutosize
        onChange={answerTextHandler}
        value={answer.answerTitle}
        placeholder="Enter answer text here..."
        minRows={3}
        minC
        required
        style={{ flex: "1 0" }}
      />

      {/* <TextField
        label={"Answer " + answer.id}
        required
        onChange={answerTextHandler}
        value={answer.answerTitle}
        variant="outlined"
        sx={{ flex: "1 0" }}
      /> */}
      <FormControlLabel
        control={
          <Switch onChange={correctHandler} checked={answer.isCorrect} />
        }
        label="Correct"
      />

      <Button size="large" onClick={() => dispatch(delAnswer(answer.id))}>
        Delete
      </Button>
    </Grid>
  );
}
