import {
  Box,
  Flex,
  Stack,
  Button,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TbBuildingFactory2 } from "react-icons/tb";
import { PiFactoryLight } from "react-icons/pi";
import { IconType } from "react-icons";
import { GiFactoryArm, GiPodiumWinner } from "react-icons/gi";
import { RiSketching } from "react-icons/ri";

interface CardProps {
  heading: string;
  description: string;
  icon: React.ReactElement;
  href: string;
  img: string;
}

interface IPattern {
  name: string;
  icon: IconType;
  href: string;
  description: string;
  img: string;
}

const Patterns: IPattern[] = [
  {
    name: "Factory",
    icon: TbBuildingFactory2,
    href: "/creational/factory",
    description: "Description for factory",
    img: "/factory.jpeg",
  },
  {
    name: "Abstract Factory",
    icon: PiFactoryLight,
    href: "/creational/abstract-factory",
    description: "Description for Abstract Factory",
    img: "/abstract-factory.jpeg",
  },
  {
    name: "Builder",
    icon: GiFactoryArm,
    href: "/creational/builder",
    description: "Description for Builder",
    img: "/builder.jpeg",
  },
  {
    name: "Prototype",
    icon: RiSketching,
    href: "/creational/prototype",
    description: "Description for Prototype",
    img: "/prototype.jpeg",
  },
  {
    name: "Singleton",
    icon: GiPodiumWinner,
    href: "/creational/singleton",
    description: "Description for Singleton",
    img: "/singleton.jpeg",
  },
];

const Card = ({ heading, description, icon, href, img }: CardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      backgroundImage={img}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      boxShadow={"md"}
      backdropFilter={""}
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
        <Box mt={1} display={"flex"} flexDir={"column"}>
          <Heading
            size="md"
            backgroundColor={"white"}
            borderRadius={"12px"}
            justifyContent={"center"}
            display={"flex"}
            px={5}
            py={2}
            alignSelf={"center"}
            textAlign={"center"}
          >
            {heading}
          </Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          variant={"solid"}
          colorScheme={"green"}
          size={"sm"}
          onClick={() => navigate(href)}
          zIndex={0}
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};

const PatternCards = () => {
  return (
    <Box width={"100%"} display={"flex"}>
      <SimpleGrid gridGap={8} columns={{ base: 1, md: 3 }} width={"100%"}>
        {Patterns.map((pattern, index) => (
          <Card
            key={index}
            heading={pattern.name}
            icon={<Icon as={pattern.icon} w={10} h={10} color={"green.300"} />}
            description={""}
            href={pattern.href}
            img={pattern.img}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PatternCards;
