import { Box, Grid, Text } from "@chakra-ui/react";
function Form() {
  return (
    <Grid
      maxW='var(--maxW)'
      gridTemplateColumns='3fr 7fr'
      borderRadius='10px'
      overflow='hidden'
      bgColor='white'
      mx='auto'
      mt='240px'
    >
      <Box
        textAlign='center'
        color='white'
        py='24px'
        pl='14px'
        pr='24px'
        bgColor='var(--primary)'
        clipPath='polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 61%, 0% 0%)'
      >
        <Text fontWeight='semibold' fontSize='32px'>
          SCHEDULE A DEMO
        </Text>
        <Text fontSize='24px'>Learn More About FloQast.</Text>
      </Box>

      <Box p='16px'>
        <Text fontWeight='semibold' fontSize='24px' textAlign='center'>
          Learn How FloQast Can{" "}
          <Box as='span' color='var(--primary)'>
            Improve Your Month-End
          </Box>
        </Text>
      </Box>
    </Grid>
  );
}

export default Form;
