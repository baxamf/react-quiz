import { Box, Button, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import QuizListQuestionItem from "../components/QuizListQuestionItem";

import { useGetQuizQuestionsQuery } from "../features/api/quizApi";
import { resetQuestion } from "../features/quiz/questionSlice";

export default function CreateQuiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: questions,
    isError,
    isLoading,
    refetch,
  } = useGetQuizQuestionsQuery();

  const newQuestion = () => {
    dispatch(resetQuestion());
    navigate("new");
  };

  return (
    <Box display="grid" minWidth={400} gap={3}>
      <Button variant="contained" size="large" onClick={newQuestion}>
        Add new Question
      </Button>
      {isLoading && <CircularProgress />}
      {isError && <Error handler={refetch} />}
      {questions &&
        questions.map((question) => (
          <QuizListQuestionItem key={question.id} question={question} />
        ))}
    </Box>
  );
}
