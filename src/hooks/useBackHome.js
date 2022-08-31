import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuestion } from "../features/quiz/questionSlice";
import { resetPlayer } from "../features/quiz/quizSlice";

export default function useBackHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function backHome() {
    navigate("/");
    dispatch(resetPlayer());
    dispatch(resetQuestion());
  }

  return backHome;
}
