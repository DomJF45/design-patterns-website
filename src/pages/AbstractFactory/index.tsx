import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Post from "../../components/Post";
import PatternBlock from "../../components/PatternCodeBlock";
import { AbstractFactoryJava } from "../../patternCode";

const AbstractFactoryPage = () => {
  return (
    <Post>
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Heading textAlign={"start"} color={"green.400"}>
          Abstract{" "}
          <Text as={"span"} color={"black"}>
            Factory
          </Text>
        </Heading>
        <Image src="/AbstractFactory.png" width="900px" alignSelf={"center"} />
        <Heading>About</Heading>
        <Text>coming soon...</Text>
        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={AbstractFactoryJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
      </Flex>
    </Post>
  );
};

export default AbstractFactoryPage;
