import { Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useError() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onClose = () => {
    setError(false);
  };
  const ErrorWindow = (errorMessage) => (
    <Dialog open={error}>
      <Typography sx={{ padding: "2rem" }}>{errorMessage}</Typography>
      {/* <Button variant="contained" onClick={() => navigate("/")}>
        Go to home page
      </Button> */}
      <Button variant="text" onClick={onClose}>
        OK
      </Button>
    </Dialog>
  );
  return { error, setError, ErrorWindow };
}
