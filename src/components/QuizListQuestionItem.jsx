import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useDelQuizQuestionMutation } from "../features/api/quizApi";

export default function QuizListQuestionItem({ question, url }) {
  const navigate = useNavigate();
  const [delQuizQuestion] = useDelQuizQuestionMutation();

  const editHandler = () => {
    navigate(`${question.id}`);
  };

  const delHandler = async () => {
    await delQuizQuestion(question.id);
    question.id === url && navigate("/create");
  };

  return (
    <Grid gap={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">{question.title}</Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardActions>
          <Button size="large" variant="outlined" onClick={editHandler}>
            Edit
          </Button>
          <Button size="large" onClick={delHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
