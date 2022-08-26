import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QuizAnswer from "../components/QuizAnswer";
import { useAddQuizQuestionMutation } from "../features/api/quizApi";
import {
  addAnswer,
  resetQuestion,
  selectQuestion,
} from "../features/quiz/questionSlice";

export default function QuizQuestion() {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const question = useSelector(selectQuestion);
  const answers = question.answers;

  const [questionTitle, setQuestionTitle] = useState(question.title);
  const [addQuestionQuery] = useAddQuizQuestionMutation();

  const questionTitleHandler = (e) => {
    setQuestionTitle(e.target.value);
  };

  const onSaveQuestion = async (e) => {
    e.preventDefault();
    const newQuestion = { ...question, title: questionTitle };
    await addQuestionQuery(newQuestion);
    navigate("/create");
  };

  return (
    <Box component="form" display="grid" gap={3} minWidth={500}>
      <Typography variant="h4" component="h4">
        {question.title ? "Edit Quiz Question" : "Create Quiz Question"}
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
        <QuizAnswer
          answer={answer}
          key={answer.id}
          answerNumber={index + 1}
          id={answer.id}
        />
      ))}
      <Button size="large" onClick={() => dispatch(addAnswer())}>
        Add Answer
      </Button>
      <Button type="submit" size="large" onClick={(e) => onSaveQuestion(e)}>
        Save Question
      </Button>
    </Box>
  );
}
