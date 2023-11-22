import { Box, Button, Grid, Input, Text } from "@chakra-ui/react";
function Form() {
  return (
    <Box px='12px'>
      <Grid
        maxW='var(--maxW)'
        gridTemplateColumns={{ sm: "1fr", md: "3fr 7fr" }}
        borderRadius='10px'
        overflow='hidden'
        bgColor='white'
        mx='auto'
        mt={{ base: "16px", sm: "40px", md: "240px" }}
      >
        <Box
          display='flex'
          flexDir='column'
          justifyContent='center'
          textAlign='center'
          py='24px'
          pl='14px'
          pr='24px'
          bgColor='var(--primary)'
          clipPath={{
            base: "",
            md: "polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 61%, 0% 0%)",
          }}
        >
          <Text color='white' fontWeight='semibold' fontSize='32px'>
            SCHEDULE A DEMO
          </Text>
          <Text color='white' fontSize='24px'>
            Learn More About FloQast.
          </Text>
        </Box>

        <Box p='24px'>
          <Text fontWeight='semibold' fontSize='24px' textAlign='center'>
            Learn How FloQast Can{" "}
            <Box as='span' color='var(--primary)'>
              Improve Your Month-End
            </Box>
          </Text>

          <Grid
            // gridTemplateColumns='repeat(3,1fr)'
            gridTemplateColumns='repeat(auto-fit,minmax(240px,1fr))'
            mt='16px'
            gap='8px'
          >
            <Input placeholder='First Name*' />
            <Input placeholder='Email*' />
            <Button
              border='solid 2px #7bab3d'
              color='white'
              bgColor='var(--primary)'
              fontSize='20px'
              gridColumn={{ base: "1/-1", lg: "span 1" }}
            >
              SCHEDULE NOW
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default Form;
