import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addAnswer,
  resetQuestion,
  selectQuestion,
  setTitle,
} from "../features/quiz/questionSlice";
import FormAnswer from "./FormAnswer";

export default function FormQuestion({ submitHandler, refresh }) {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const answers = question.answers;

  const resetHandler = () => {
    dispatch(resetQuestion());
  };

  const questionTitleHandler = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitHandler(question);
  };

  return (
    <Box display="grid" component="form" gap={3} onSubmit={onSubmitHandler}>
      <Typography variant="h4" component="h4">
        {quizId ? "Edit Question" : "Create new Question"}
      </Typography>
      <TextField
        fullWidth
        required
        value={question.title}
        onChange={questionTitleHandler}
        id="outlined-basic"
        label="Question"
        variant="outlined"
      />
      {answers.map((answer) => (
        <FormAnswer answer={answer} key={answer.id} />
      ))}
      <Button
        variant="outlined"
        size="large"
        onClick={() => dispatch(addAnswer())}
      >
        Add Answer
      </Button>
      <Button variant="contained" type="submit" size="large">
        Save Question
      </Button>
      <Grid container>
        <Button size="large" onClick={resetHandler}>
          Reset
        </Button>
        {refresh && (
          <Button size="large" onClick={refresh}>
            Undo
          </Button>
        )}
      </Grid>
    </Box>
  );
}
