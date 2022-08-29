import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FinalScore from "../components/FinalScore";
import PassForm from "../components/PassForm";
import PassQuestion from "../components/PassQuestion";
import PlayerInfo from "../components/PlayerInfo";
import { useGetQuizQuestionsQuery } from "../features/api/quizApi";
import { resetPlayer, selectQuiz } from "../features/quiz/quizSlice";

export default function PassQuiz() {
  const dispatch = useDispatch();
  const { data: quiz } = useGetQuizQuestionsQuery();
  const questionAmount = quiz ? quiz.length : 0;
  const { name, score, question } = useSelector(selectQuiz);

  useEffect(() => {
    dispatch(resetPlayer());
  }, []);

  if (question >= questionAmount && name) {
    return <FinalScore name={name} score={score} question={question} />;
  } else {
    return (
      <Grid
        container
        gap={6}
        display="grid"
        justifyContent="center"
        alignItems="center"
      >
        {name ? (
          <PlayerInfo name={name} score={score} question={question} />
        ) : (
          <PassForm firstQuestion={quiz && quiz[0]} />
        )}
        {name && (
          <>
            <Box>
              Question {question + 1} / {questionAmount}{" "}
            </Box>{" "}
            <PassQuestion question={quiz[question]} />
          </>
        )}
      </Grid>
    );
  }
}
