import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizAnswer from "../components/QuizAnswer";
import { useAddQuizQuestionMutation } from "../features/api/quizApi";
import { addAnswer, selectQuestion } from "../features/quiz/questionSlice";
import { addQuizQuestion, selectQuiz } from "../features/quiz/quizSlice";

export default function CreateQuiz() {
  const question = useSelector(selectQuestion);
  const answers = question.answers;
  const dispatch = useDispatch();
  const [questionTitle, setQuestionTitle] = useState("");
  const [addQuestionQuery, test] = useAddQuizQuestionMutation();

  console.log(test);

  const questionTitleHandler = (e) => {
    setQuestionTitle(e.target.value);
  };

  const onSaveQuestion = async () => {
    const newQuestion = { ...question, title: questionTitle };
    const response = await addQuestionQuery(newQuestion);
    const data = await response.data;
    dispatch(addQuizQuestion(data));
  };

  return (
    <Box>
      <Typography variant="h2" component="h2">
        Create Quiz Question
      </Typography>
      <TextField
        required
        type="text"
        value={questionTitle}
        onChange={questionTitleHandler}
        id="outlined-basic"
        label="Question"
        variant="outlined"
      />
      {answers.map((answer, index) => (
        <QuizAnswer key={answer.id} answerNumber={index + 1} id={answer.id} />
      ))}
      <Button size="large" onClick={() => dispatch(addAnswer())}>
        Add Answer
      </Button>
      <Button size="large" onClick={() => onSaveQuestion()}>
        Save Question
      </Button>
    </Box>
  );
}
