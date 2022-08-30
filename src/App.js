import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const BoxLink = (props) => (
    <Box
      onClick={props.onClick}
      sx={{
        flex: "1 0",
        display: "grid",
        placeContent: "center",
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "center",
        cursor: "pointer",
        bgcolor: props.bgColor && props.bgColor,
      }}
    >
      {props.children}
    </Box>
  );
  const GridContainer = (props) => (
    <Grid
      container
      sx={{
        minHeight: "100vh",
      }}
    >
      {props.children}
    </Grid>
  );

  return (
    <GridContainer>
      <BoxLink bgColor={"text.disabled"} onClick={() => navigate("create")}>
        Create Quiz
      </BoxLink>
      <BoxLink onClick={() => navigate("pass")}>Pass Quiz</BoxLink>
    </GridContainer>
  );
}

export default App;
