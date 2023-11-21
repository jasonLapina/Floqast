import { Box } from "@chakra-ui/react";
import background from "./assets/Background.jpg";
import HeroText from "./components/HeroText";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <Box
      bgImage={background}
      bgSize='cover'
      bgRepeat='no-repeat'
      bgPos='center'
      pt='180px'
      pb='56px'
      minH='100vh'
      px={{ xl: "0px", lg: "8px", base: "16px" }}
    >
      <HeroText />
      <Form />
    </Box>
  );
}

export default App;
