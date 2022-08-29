import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nextQuestion, setScore } from "../features/quiz/quizSlice";
import compareAnswers from "../services/compareAnswers";

export default function PassQuestion({ question }) {
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
    <Box display="grid" gap={2}>
      <Box>{question.title}</Box>

      {answers.map((answer) => (
        <Box
          className={choise.includes(answer.id) && "chosen"}
          onClick={() => onChoise(answer.id)}
          key={answer.id}
        >
          {answer.answerTitle}
        </Box>
      ))}
      <Button variant="contained" size="large" onClick={next}>
        Next Question
      </Button>
    </Box>
  );
}
