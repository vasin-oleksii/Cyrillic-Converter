import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Convertor from "./pages/Home/Convertor/Convertor";

function App() {
  return (
    <Box sx={box}>
      <Header />
      <Convertor />
      <Footer />
    </Box>
  );
}

export default App;

const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "98vh",
  p: "0px",
  flexDirection: "column",
};
