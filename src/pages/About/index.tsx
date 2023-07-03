import { Text, Flex, Heading, Image } from "@chakra-ui/react";
import Post from "../../components/Post";

const AboutPage = () => {
  return (
    <Post>
      {/* wrap in post component */}
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Heading textAlign={"start"}>
          <Text as={"span"} color={"green.400"}>
            About
          </Text>
        </Heading>
        <Image src="/factory-uml.png" width="700px" alignSelf={"center"} />
        <Heading>About</Heading>
        <Text>Coming soon... </Text>
      </Flex>
    </Post>
  );
};

export default AboutPage;
