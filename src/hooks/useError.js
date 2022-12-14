import { Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";

export default function useError() {
  const [error, setError] = useState(false);

  const onClose = () => {
    setError(false);
  };
  const ErrorWindow = (errorMessage) => (
    <Dialog open={error}>
      <Typography sx={{ padding: "2rem" }}>{errorMessage}</Typography>
      <Button variant="text" onClick={onClose}>
        OK
      </Button>
    </Dialog>
  );
  return { error, setError, ErrorWindow };
}
