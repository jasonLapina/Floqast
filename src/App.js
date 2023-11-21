import { Box } from "@chakra-ui/react";
import background from "./assets/Background.jpg";
import HeroText from "./components/HeroText";

function App() {
  return (
    <Box
      bgImage={background}
      minH='100vh'
      bgSize='cover'
      bgRepeat='no-repeat'
      bgPos='center'
      py='180px'
    >
      <HeroText />
      <Box as='main' maxW='1330px' mx='auto'></Box>
    </Box>
  );
}

export default App;
