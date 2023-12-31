import {
  Box,
  Text,
  Flex,
  Heading,
  Icon,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiOutlineAntDesign } from "react-icons/ai";
import Post from "../../components/Post";
import { patterns } from "../../data/classification";
import DropDown from "./DropDown";

const AboutPage = () => {
  return (
    <Post width={"100%"}>
      {/* wrap in post component */}
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Box
          backgroundImage={"/background-art.png"}
          backgroundColor={"whiteAlpha.700"}
          borderRadius={"10px"}
          p={10}
        >
          <Heading
            textAlign={"start"}
            color="green.400"
            size={{ base: "xl", md: "xl" }}
            backgroundColor={"whitesmoke"}
            p={5}
            width={{ base: "100%", md: "fit-content" }}
            borderRadius={"50px"}
            boxShadow={"lg"}
            fontWeight={"normal"}
          >
            What are Design Patterns?
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          my={5}
          gap={{ base: 5, md: 20 }}
        >
          <HStack alignItems={"start"} justifyContent={"center"}>
            <Icon
              as={AiOutlineAntDesign}
              color={"gray.500"}
              boxSize={{ base: 6, md: 7 }}
            />
            <Text
              color={"gray.600"}
              width={{ md: "500px" }}
              fontSize={{ md: "xl" }}
            >
              <Text as={"span"} fontWeight={"bold"} color={"green.500"}>
                Design Patterns
              </Text>{" "}
              are specialized solutions for common problems within software
              engineering. Patterns are almost like blueprints, you can
              customize it to better solve a design problem.
            </Text>
          </HStack>
          <HStack alignItems={"start"} justifyContent={"center"}>
            <Icon
              as={AiOutlineAntDesign}
              color={"gray.500"}
              boxSize={{ base: 6, md: 7 }}
            />
            <Box
              color={"gray.600"}
              width={{ md: "500px" }}
              fontSize={{ md: "xl" }}
            >
              <Text as={"span"} fontWeight={"bold"} color={"green.500"}>
                Classification and Scope
              </Text>{" "}
              <Text>
                Each pattern belongs to a certain classification of patterns that dictate their applicability.
                The different types of classifications of design patterns include Structural, Creational, and Behavioral.
                Within each of these categories, there are different patterns that apply to classes and objects.
              </Text>
            </Box>
          </HStack>
        </SimpleGrid>
        <Flex
          alignSelf={{ base: "center", md: "end" }}
          flexDir={{ base: "column" }}
          width={{ base: "80%", md: "40%" }}
        >
          <Flex flexWrap={"wrap"} flexDir={{ base: "column", md: "row" }}>
            <>
              {Object.entries(patterns).map(([key, value], index) => (
                <DropDown groupName={key} patternGroup={value} key={index} />
              ))}
            </>
          </Flex>
        </Flex>
      </Flex>
    </Post>
  );
};

export default AboutPage;
