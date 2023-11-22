import { Box } from "@chakra-ui/react";
import background from "./assets/Background.jpg";
import HeroText from "./components/HeroText";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <Box
      bgImage={background}
      bgSize={{ base: "240%", md: "cover" }}
      bgRepeat='no-repeat'
      bgPos={{ base: "top", md: "center" }}
      pt={{ base: "", sm: "180px" }}
      pb='56px'
      minH='100vh'
      // px={{ xl: "0px", lg: "8px", base: "16px" }}
    >
      <HeroText />
      <Form />
    </Box>
  );
}

export default App;
