import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        width={"100%"}
        maxWidth={"1200px"}
        height={"100%"}
      >
        <Heading textAlign={"center"} size={"2xl"} color={"green.500"}>
          Design{" "}
          <Text as={"span"} color={"black"}>
            Patterns
          </Text>
        </Heading>
        <Image
          src={"/intro.gif"}
          width={"350px"}
          alignSelf={"center"}
          draggable={false}
          userSelect={"none"}
        />
        <Box
          width={{ base: "95%", md: "60%" }}
          maxWidth={"1200px"}
          alignSelf={"center"}
          backgroundColor={"green.50"}
          borderRadius={"8px"}
          p={3}
          boxShadow={"sm"}
        >
          <Heading style={{ textAlign: "center" }}>
            Welcome to the world of design patterns!
          </Heading>
          <Text textAlign={"center"}>
            Design patterns are a way to solve common problems in object-oriented software development. They are tried and true solutions to certain design use cases that enable us to write more easily understandable and maintainable code. There are a few categories of design patterns, including creational, behavioral, and structural. Within each category, there are many different patterns, with some pertaining to classes and others pertaining to objects.
            Here, we will teach you in-depth examples of these design patterns. For the time being, we will focus on creational patterns!
          </Text>
        </Box>
        <Button
          my={8}
          width={"200px"}
          alignSelf={"center"}
          colorScheme="green"
          borderRadius={"20px"}
          justifyContent={"space-between"}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={"0.1s linear"}
          onClick={() => navigate("/creational")}
        >
          Learn More!
          <Icon as={FiChevronRight} />
        </Button>
      </Flex>
    </Box>
  );
};

export default HomePage;
