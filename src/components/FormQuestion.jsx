import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
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
    <Box
      display="grid"
      component="form"
      gap="2rem"
      onSubmit={onSubmitHandler}
      minWidth={450}
      flex="1 0"
      paddingInline="2vw"
    >
      <Typography variant="h4" component="h4">
        {quizId ? "Edit Question" : "Create new Question"}
      </Typography>
      <TextareaAutosize
        placeholder="Enter question text here..."
        minRows={5}
        required
        value={question.title}
        onChange={questionTitleHandler}
      />
      {/* <TextField
        fullWidth
        required
        value={question.title}
        onChange={questionTitleHandler}
        id="outlined-basic"
        label="Question"
        variant="outlined"
      /> */}
      {answers.map((answer) => (
        <FormAnswer answer={answer} key={answer.id} />
      ))}
      <Grid container gap={2}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => dispatch(addAnswer())}
        >
          Add Answer
        </Button>
        <Button size="large" onClick={resetHandler}>
          Reset
        </Button>
        {refresh && (
          <Button size="large" onClick={refresh}>
            Undo
          </Button>
        )}
        <Button variant="contained" type="submit" size="large">
          Save Question
        </Button>
      </Grid>
    </Box>
  );
}
