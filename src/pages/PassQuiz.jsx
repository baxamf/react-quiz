import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FinalScore from "../components/pass/FinalScore";
import PassQuestion from "../components/pass/PassQuestion";
import PlayerInfo from "../components/pass/PlayerInfo";
import { useGetQuizQuestionsQuery } from "../features/quiz/quizApi";
import { selectQuiz } from "../features/quiz/quizSlice";

export default function PassQuiz() {
  const { data: quiz, isLoading } = useGetQuizQuestionsQuery();
  const questionAmount = quiz ? quiz.length : 0;
  const { name, score, question } = useSelector(selectQuiz);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (question >= questionAmount && name) {
    return <FinalScore name={name} score={score} question={question} />;
  } else {
    return (
      <Grid className="grid-container">
        {name && quiz && (
          <>
            <PlayerInfo name={name} score={score} question={question} />
            <PassQuestion
              question={quiz[question]}
              questionAmount={questionAmount}
            />
          </>
        )}
      </Grid>
    );
  }
}
