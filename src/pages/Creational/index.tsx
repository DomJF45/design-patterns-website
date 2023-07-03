import { Text, Flex, Heading } from "@chakra-ui/react";
import Post from "../../components/Post";
import PatternCards from "./PatternCards";

const CreationalPage = () => {
  return (
    <Post>
      {/* wrap in post component */}
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Heading textAlign={"start"} color={"green.400"}>
          Creational{" "}
          <Text as={"span"} color={"black"}>
            Patterns
          </Text>
        </Heading>
        <PatternCards />
      </Flex>
    </Post>
  );
};

export default CreationalPage;
