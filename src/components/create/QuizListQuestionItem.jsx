import { useNavigate } from "react-router-dom";
import { Button, Card, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDelQuizQuestionMutation } from "../../features/quiz/quizApi";
import { Box } from "@mui/system";
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
    <Card variant="outlined">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="1rem"
      >
        <Typography variant="subtitle1">{question.title}</Typography>
        <Box>
          <Button size="large" onClick={editHandler}>
            <EditIcon />
          </Button>
          <Button color="error" size="large" onClick={delHandler}>
            <DeleteIcon />
          </Button>
        </Box>
      </Grid>
    </Card>
  );
}
