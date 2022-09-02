import { useNavigate } from "react-router-dom";

export default function useBackHome() {
  const navigate = useNavigate();

  function backHome() {
    navigate("/");
  }

  return backHome;
}
