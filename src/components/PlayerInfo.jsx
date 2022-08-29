import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function PlayerInfo({ name, score }) {
  return (
    <Box>
      <Typography variant="h4" component="h4">
        {name}'s score: {score}/100
      </Typography>
    </Box>
  );
}