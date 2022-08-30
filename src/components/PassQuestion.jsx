import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nextQuestion, setScore } from "../features/quiz/quizSlice";
import compareAnswers from "../services/compareAnswers";

export default function PassQuestion({ question }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answers = question.answers;
  const correct = [];
  answers.forEach((el) => el.isCorrect === true && correct.push(el.id));
  const [choise, setChoise] = useState([]);

  const next = () => {
    if (choise.length === 0) {
      alert("You must select one answer at least");
      return;
    }
    if (compareAnswers(correct, choise)) {
      dispatch(setScore());
      dispatch(nextQuestion());
      setChoise([]);
    } else {
      dispatch(nextQuestion());
      setChoise([]);
    }
  };

  const onChoise = (id) => {
    if (choise.some((el) => el === id)) {
      setChoise(choise.filter((el) => el !== id));
    } else {
      setChoise([...choise, id]);
    }
  };

  return (
    <Box display="grid" gap={2} minWidth={450}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">{question.title}</Typography>
          <Divider />
          <Stack spacing={2} sx={{ mt: 2 }}>
            {answers.map((answer) => (
              <Paper
                sx={{
                  p: ".5rem 1rem",
                  cursor: "pointer",
                  bgcolor: choise.includes(answer.id) && "text.secondary",
                }}
                variant="outlined"
                onClick={() => onChoise(answer.id)}
                key={answer.id}
              >
                {answer.answerTitle}
              </Paper>
            ))}
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="large" onClick={() => navigate("/")}>
            Cancel and Quit
          </Button>
          <Button variant="contained" size="large" onClick={next}>
            Next Question
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
