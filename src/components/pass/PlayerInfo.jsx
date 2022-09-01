import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function PlayerInfo({ name, score, question }) {
  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        color="text.primary"
        textAlign="center"
      >
        {name}'s score: {score} / {question}
      </Typography>
    </Box>
  );
}
