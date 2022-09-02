import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../components/common/Login";
import { selectQuiz, tryAgain } from "../features/quiz/quizSlice";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role, name } = useSelector(selectQuiz);

  const start = () => {
    dispatch(tryAgain());
    navigate("pass");
  };

  return (
    <>
      {!role && <Login />}
      <Grid className="grid-container">
        {role === "ADMIN" && (
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("create")}
          >
            Create Quiz
          </Button>
        )}
        {name && (
          <Button size="large" variant="contained" onClick={start}>
            Start Quiz
          </Button>
        )}
      </Grid>
    </>
  );
}
