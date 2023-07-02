import { Text, Flex, Heading, Image } from "@chakra-ui/react";

const FactoryPage = () => {
  return (
    <Flex direction={"column"} width={"100%"} justifyContent={"center"} gap={8}>
      <Heading textAlign={"center"}>
        Factory{" "}
        <Text as={"span"} color={"green.400"}>
          Pattern
        </Text>
      </Heading>
      <Image src="/factory-uml.png" width="700px" alignSelf={"center"} />
      <Text>
        The Factory pattern provides a great way to build objects depending on
        the specified types.
      </Text>
    </Flex>
  );
};

export default FactoryPage;
