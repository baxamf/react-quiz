import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectQuiz } from "../../features/quiz/quizSlice";

export default function PassAnswer({ answer, onChoise }) {
  const { status, choise } = useSelector(selectQuiz);
  const [answerColor, setAnswerColor] = useState("inherit");

  const onAnswerClick = (id) => {
    if (choise.some((el) => el === id)) {
      setAnswerColor("inherit");
      onChoise(id);
    } else {
      setAnswerColor("primary.main");
      onChoise(id);
    }
  };

  useEffect(() => {
    if (status && choise.includes(answer.id)) {
      answer.isCorrect
        ? setAnswerColor("success.light")
        : setAnswerColor("error.light");
    }
  }, [status, choise]);

  return (
    <Paper
      sx={{
        p: ".5rem 1rem",
        cursor: "pointer",
        bgcolor: choise.includes(answer.id) && answerColor,
      }}
      variant="outlined"
      onClick={() => onAnswerClick(answer.id)}
    >
      <Typography
        color={choise.includes(answer.id) && answerColor && "white"}
        variant="body2"
      >
        {answer.answerTitle}
      </Typography>
    </Paper>
  );
}
