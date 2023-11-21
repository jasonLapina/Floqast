import { Box, Grid, Text } from "@chakra-ui/react";
function Form() {
  return (
    <Grid gridTemplateColumns='3fr 7fr'>
      <Box>
        <Text>SCHEDULE A DEMO</Text>
        <Text>Learn More About FloQast.</Text>
      </Box>

      <Box>
        <Text>
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
