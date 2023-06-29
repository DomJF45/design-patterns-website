import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.300, green.400)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <Flex width={"100%"} justifyContent={"center"} mb={2}>
        <Image src={"/not-found.png"} width={"400px"} />
      </Flex>
      <Button
        colorScheme="green"
        bgGradient="linear(to-r, green.300, green.400)"
        color="white"
        variant="solid"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};
