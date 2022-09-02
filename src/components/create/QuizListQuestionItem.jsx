import { useNavigate } from "react-router-dom";
import { Button, Card, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useDelQuizQuestionMutation } from "../../features/quiz/quizApi";
import { useDispatch } from "react-redux";
import { setQuestion } from "../../features/quiz/questionSlice";

export default function QuizListQuestionItem({ question, url }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [delQuizQuestion] = useDelQuizQuestionMutation();

  const editHandler = () => {
    dispatch(setQuestion(question));
  };

  const delHandler = async () => {
    await delQuizQuestion(question.id);
    question.id === url && navigate("/create");
  };

  return (
    <Grid container alignItems="center" flexWrap="wrap">
      <Card variant="outlined" sx={{ flex: "1 0", padding: "0.7rem" }}>
        <Typography lineHeight={1.25} variant="subtitle1">
          {question.title}
        </Typography>
      </Card>
      <Grid container justifyContent="space-between">
        <Button onClick={editHandler}>
          <EditIcon />
        </Button>
        <IconButton color="error" onClick={delHandler}>
          <BackspaceIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
