import { Box, Image, Text } from "@chakra-ui/react";
import floqast from "../assets/FloQast.png";
function HeroText() {
  return (
    <Box
      bgGradient='linear(to right, rgba(255,255,255,1),rgba(255,255,255,0) 56% )'
      py='40px'
    >
      <Box maxW='var(--maxW)' mx='auto'>
        <Image display='inline-block' maxW='320px' src={floqast} />
        <Box
          fontStyle='italic'
          fontSize='32px'
          fontWeight='semibold'
          display='inline'
        >
          <Text as='span' ml='16px'>
            The
          </Text>
          <br />
          <Text as='span' fontSize='48px' color='var(--primary)'>
            Fastest, Most Accurate
          </Text>
          <Text>Way to Close Your Books!</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroText;
