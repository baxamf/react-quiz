import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextQuestionAsync,
  selectQuiz,
  setChoise,
  setScore,
} from "../../features/quiz/quizSlice";
import useBackHome from "../../hooks/useBackHome";
import useError from "../../hooks/useError";
import compareAnswers from "../../services/compareAnswers";
import PassAnswer from "./PassAnswer";

export default function PassQuestion({ question, questionAmount }) {
  const dispatch = useDispatch();
  const backHome = useBackHome();
  const [disabled, setDisabled] = useState(false);
  const answers = question.answers;
  const correct = [];
  answers.forEach((el) => el.isCorrect === true && correct.push(el.id));
  const { choise } = useSelector(selectQuiz);
  const { error, setError, ErrorWindow } = useError();

  useEffect(() => {
    setDisabled(false);
  }, [question]);

  const next = (e) => {
    if (choise.length === 0) {
      setError(true);
      return;
    }
    setDisabled(true);
    if (compareAnswers(correct, choise)) {
      dispatch(setScore());
      dispatch(nextQuestionAsync());
    } else {
      dispatch(nextQuestionAsync());
    }
  };

  const onChoise = (id) => {
    dispatch(setChoise(id));
  };

  return (
    <Box display="grid">
      {error && ErrorWindow("You need to select one answer at least")}
      <Typography variant="body2" color="text.secondary" textAlign="right">
        Question {question.id} / {questionAmount}
      </Typography>
      <Card variant="outlined" sx={{ padding: "1rem 2rem" }}>
        <Typography variant="body1" mb={1}>
          {question.title}
        </Typography>
        <Divider />
        <Stack spacing={2} sx={{ marginBlock: 2 }}>
          {answers.map((answer) => (
            <PassAnswer key={answer.id} answer={answer} onChoise={onChoise} />
          ))}
          <Button
            disabled={disabled}
            variant="contained"
            size="large"
            onClick={next}
          >
            Next Question
          </Button>
        </Stack>
      </Card>
      <Button onClick={backHome}>Cancel and Quit</Button>
    </Box>
  );
}
