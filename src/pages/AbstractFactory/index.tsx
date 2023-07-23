import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Post from "../../components/Post";
import PatternBlock from "../../components/PatternCodeBlock";
import { AbstractFactoryJava, abstractGundamFactory } from "./patternCode";

const AbstractFactoryPage = () => {
  return (
    <Post>
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Heading
          textAlign={"start"}
          color={"green.400"}
          textDecoration={"underline"}
        >
          Abstract{" "}
          <Text as={"span"} color={"black"}>
            Factory
          </Text>
        </Heading>
        <Heading>Overview</Heading>
        <Text>
          The abstract factory pattern allows you to create families of related
          products without specifying their concrete classes explicitly,
          providing a way to create different variations of products while
          ensuring they are compatible within their families.
        </Text>
        <Image src="/AbstractFactory.png" width="900px" alignSelf={"center"} />

        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={AbstractFactoryJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Heading>Abstract Gunpla Factory</Heading>
        <Heading size={"lg"}>UML</Heading>
        <Image
          src="/abstract-gunpla-factory.png"
          width="900px"
          alignSelf={"center"}
        />

        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={abstractGundamFactory}
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
