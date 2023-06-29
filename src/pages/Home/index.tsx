import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import PatternGrid from "./PatternCard";
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
        <Heading textAlign={"center"} size={"2xl"}>
          Design{" "}
          <Text as={"span"} color={"green.500"}>
            Patterns!
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
          width="60%"
          maxWidth={"1200px"}
          alignSelf={"center"}
          backgroundColor={"green.50"}
          borderRadius={"8px"}
          p={3}
          boxShadow={"sm"}
        >
          <Text textAlign={"center"}>
            Welcome to the world of design patterns! Here, we will teach you
            in-depth examples of design patterns. For the time being, we will
            focus on creational patterns!
          </Text>
        </Box>
        <Box my={0}>
          <PatternGrid />
        </Box>
        <Button
          width={"200px"}
          alignSelf={"center"}
          colorScheme="green"
          borderRadius={"20px"}
          justifyContent={"space-between"}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={"0.1s linear"}
          onClick={() => navigate("/factory")}
        >
          Learn More!
          <Icon as={FiChevronRight} />
        </Button>
      </Flex>
    </Box>
  );
};

export default HomePage;
