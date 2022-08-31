import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FinalScore from "../components/pass/FinalScore";
import PassForm from "../components/pass/PassForm";
import PassQuestion from "../components/pass/PassQuestion";
import PlayerInfo from "../components/pass/PlayerInfo";
import { useGetQuizQuestionsQuery } from "../features/quiz/quizApi";
import { resetPlayer, selectQuiz } from "../features/quiz/quizSlice";

export default function PassQuiz() {
  const dispatch = useDispatch();
  const { data: quiz } = useGetQuizQuestionsQuery();
  const questionAmount = quiz ? quiz.length : 0;
  const { name, score, question } = useSelector(selectQuiz);

  useEffect(() => {
    dispatch(resetPlayer());
  }, [dispatch]);

  if (question >= questionAmount && name) {
    return <FinalScore name={name} score={score} question={question} />;
  } else {
    return (
      <Grid className="grid-container">
        {name ? (
          <PlayerInfo name={name} score={score} question={question} />
        ) : (
          <PassForm firstQuestion={quiz && quiz[0]} />
        )}
        {name && (
          <PassQuestion
            question={quiz[question]}
            questionAmount={questionAmount}
          />
        )}
      </Grid>
    );
  }
}
