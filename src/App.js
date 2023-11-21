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
      py='180px'
      h='100vh'
    >
      <HeroText />
      <Form />
    </Box>
  );
}

export default App;
