import { Grid, Button, CircularProgress } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QuizListQuestion from "./QuizListQuestionItem";
import { resetQuestion } from "../../features/quiz/questionSlice";
import { useGetQuizQuestionsQuery } from "../../features/quiz/quizApi";

export default function QuizList() {
  const dispatch = useDispatch();
  const { quizId } = useParams();
  const navigate = useNavigate();
  const {
    data: questions,
    isError,
    isLoading,
    refetch,
  } = useGetQuizQuestionsQuery();

  useEffect(() => {
    dispatch(resetQuestion());
  }, [quizId]);

  const newQuestion = () => {
    dispatch(resetQuestion());
    navigate("/create");
  };

  return (
    <Grid className="quiz-list-container">
      <Button
        startIcon={<AddBoxIcon />}
        variant="contained"
        size="large"
        onClick={newQuestion}
      >
        Add new Question
      </Button>

      {isLoading && <CircularProgress />}
      {isError && (
        <Button onClick={refetch}>
          <RefreshIcon />
        </Button>
      )}
      {questions &&
        questions.map((question) => (
          <QuizListQuestion
            key={question.id}
            question={question}
            url={quizId}
          />
        ))}
    </Grid>
  );
}
