import {
  Box,
  Flex,
  Stack,
  Button,
  Heading,
  Text,
  Icon,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { TbBuildingFactory } from "react-icons/tb";
import { PiTreeStructureBold } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";

interface CardProps {
  heading: string;
  description: string;
  icon: React.ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={1}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          variant={"link"}
          colorScheme={"green"}
          size={"sm"}
          onClick={() => navigate(href)}
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};

const PatternGrid = () => {
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {false && (
            <>
              <Card
                heading={"Creational"}
                icon={
                  <Icon
                    as={TbBuildingFactory}
                    w={10}
                    h={10}
                    color={"green.300"}
                  />
                }
                description={
                  "Creational design patterns provide strategies for creation which increase elasticity and code reuse"
                }
                href={"/creational"}
              />
              <Card
                heading={"Structural"}
                icon={
                  <Icon
                    as={PiTreeStructureBold}
                    w={10}
                    h={10}
                    color={"green.300"}
                  />
                }
                description={
                  "Structural design patterns allow the assembly of objects and classes into complex structures, while maintaining flexibility and efficiency"
                }
                href={"/structural"}
              />
              <Card
                heading={"Behavioral"}
                icon={
                  <Icon as={LuBrainCircuit} w={10} h={10} color={"green.300"} />
                }
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"/behavioral"}
              />
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default PatternGrid;
