import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Post from "../../components/Post";

const SingletonPage = () => {
  return (
    <Post>
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Heading textAlign={"start"} color={"green.400"}>
          Singleton{" "}
          <Text as={"span"} color="black">
            Pattern
          </Text>
        </Heading>
        <Image src="/factory-uml.png" width="700px" alignSelf={"center"} />
        <Heading>About</Heading>
        <Text>coming soon...</Text>
      </Flex>
    </Post>
  );
};

export default SingletonPage;
