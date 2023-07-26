import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import ProTip from "./proTip";
import Blog from "./comps/blog/Blog";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};

const App = () => (
  <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom>
        Material UI Create React App example with styled-components
      </Typography>
      <Blog />
      <ProTip />
      <Copyright />
    </Box>
  </Container>
);

export default App;
