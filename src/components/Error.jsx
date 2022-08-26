import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error({ handler }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography>Something goes wrong</Typography>
      <Button onClick={handler}>Reload</Button>
      <Button onClick={() => navigate("/")}>Go to home page</Button>
    </Box>
  );
}
