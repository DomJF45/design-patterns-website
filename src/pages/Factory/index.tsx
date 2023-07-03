import { Text, Flex, Heading, Image } from "@chakra-ui/react";
import Post from "../../components/Post";

const FactoryPage = () => {
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
          Factory{" "}
          <Text as={"span"} color={"black"}>
            Pattern
          </Text>
        </Heading>
        <Image src="/factory-uml.png" width="700px" alignSelf={"center"} />
        <Heading>About</Heading>
        <Text>
          The Factory pattern provides a great way to build objects depending on
          the subclasses. The pattern encapsulates the process of creating
          objects and decreases coupling via abstraction.
        </Text>
      </Flex>
    </Post>
  );
};

export default FactoryPage;
