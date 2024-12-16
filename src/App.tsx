import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      bgcolor="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p="0px"
    >
      <Box>
        <Typography color="text.primary">Hello from</Typography>
        <Typography component="h1" color="textPrimary" fontSize="100px">
          Cyrillic-Converter
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
