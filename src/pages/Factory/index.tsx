import {
  Text,
  Flex,
  Heading,
  Image,
  Button,
  ListItem,
  OrderedList,
  Icon,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Post from "../../components/Post";
import PatternBlock from "../../components/PatternCodeBlock";
import { FactoryPatternJava, gundamFactoryJava } from "./factoryCode";
import { FiArrowRight } from "react-icons/fi";

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
        <Heading
          textAlign={"start"}
          color={"green.400"}
          textDecoration={"underline"}
          textUnderlineOffset={2}
        >
          Factory{" "}
          <Text as={"span"} color={"black"}>
            Pattern
          </Text>
        </Heading>
        <Heading>Overview</Heading>
        <Text>
          The Factory pattern provides a great way to build objects depending on
          the subclasses. The pattern encapsulates the process of creating
          objects and decreases coupling via abstraction. It provides a way to
          create objects without exposing the instantiation logic to the client
          code. Instead of directly calling a constructor to create objects, the
          client code interacts with a factory method or an abstract factory
          interface, which handles the object creation.
        </Text>
        <Heading size={"lg"}>UML</Heading>
        <Image src="/factory-uml.png" width="500px" alignSelf={"center"} />
        <Heading size="lg">Code</Heading>
        <Flex direction={"column"}>
          <Text>Java</Text>
          <PatternBlock
            code={FactoryPatternJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Heading size={"lg"}>Pros:</Heading>
        <UnorderedList>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Encapsulation:{" "}
            </Text>{" "}
            The Factory Pattern encapsulates the object creation logic within
            the factory class. This helps in isolating the client code from the
            details of object creation, making it easier to maintain and modify
            the code without affecting the client.
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Centralized Object Creation:{" "}
            </Text>{" "}
            By centralizing the object creation process in the factory, you can
            manage complex object creation logic, such as choosing a class based
            on certain conditions or configurations.
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Code Reusability{" "}
            </Text>{" "}
            The Factory Pattern promotes code reusability by providing a single
            point of instantiation for related objects. This can help reduce
            code duplication and enforce consistency in object creation across
            the application.
          </ListItem>
        </UnorderedList>
        <Heading size="lg">Cons: </Heading>
        <UnorderedList>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Increased Complexity{" "}
            </Text>{" "}
            The Factory Pattern introduces additional classes and abstraction,
            which can increase the complexity of the codebase, especially for
            small and simple applications.
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Tight Coupling with Factory:{" "}
            </Text>{" "}
            The client code might become tightly coupled with the factory class,
            reducing flexibility if you need to change the factory or its
            implementation.
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Code Overhead{" "}
            </Text>{" "}
            Introducing a factory class means adding extra code to the project,
            which might not be justified for smaller projects or when there are
            only a few product classes.
          </ListItem>
        </UnorderedList>
        <Heading>Gundam</Heading>
        <Image
          src={"/gundam-pilot-gif.gif"}
          width={"400px"}
          alignSelf={"center"}
        />
        <Text>
          {
            "Gundam refers to a popular Japanese media franchise that originated in 1979 with the release of the original Mobile Suit Gundam anime series. Created by Yoshiyuki Tomino and produced by Sunrise, the Gundam franchise has since become a cultural phenomenon, spanning various anime series, movies, manga, video games, and model kits. At its core, Gundam revolves around the concept of giant humanoid robots known as Mobile Suits. These Mobile Suits are piloted by humans and are often used in military conflicts. What sets Gundam apart from other mecha anime is its focus on realistic physics, complex characters, and political themes. The franchise has gained a massive and dedicated fanbase worldwide."
          }
        </Text>
        <Heading>Gunpla</Heading>
        <Image src={"/gunpla-rx78.png"} alignSelf={"center"} width={"300px"} />
        <Text as={"div"}>
          {
            "Gunpla is a portmanteau of Gundam and Plastic Model. It refers to the plastic model kits that enthusiasts and fans can purchase to build their own Gundam models. These kits are manufactured by Bandai, the company that holds the license for Gundam merchandise. Gunpla kits come in various grades, which determine the complexity and level of detail of the model. The most common grades include:"
          }
          <OrderedList mt={2}>
            <ListItem>
              <Text fontWeight={"bold"} as={"span"}>
                High Grade (HG):{" "}
              </Text>
              {
                "These are beginner-friendly kits with a simple assembly process and relatively fewer parts. They are usually 1/144 scale, making them smaller than other grades."
              }
            </ListItem>
            <ListItem>
              <Text fontWeight={"bold"} as={"span"}>
                Master Grade (MG):{" "}
              </Text>
              {
                "MG kits are more detailed and larger than HG kits, typically 1/100 scale. They offer more advanced features like inner frames, better articulation, and a higher part count."
              }
            </ListItem>
            <ListItem>
              <Text fontWeight={"bold"} as={"span"}>
                Perfect Grade (PG):{" "}
              </Text>
              {
                "These are the most detailed and largest Gunpla kits, typically 1/60 scale. PG kits boast intricate details, a sophisticated inner frame, and an extensive part count, making them more time-consuming but rewarding to build."
              }
            </ListItem>
          </OrderedList>
        </Text>
        <Heading>Gunpla Factory</Heading>
        <Text>
          {
            "Because of the various kinds and suites of Gunpla models available, they make for a great example for Factory Design Patterns. Let's take a look at the following UML."
          }
        </Text>

        <Heading size={"lg"}>UML</Heading>
        <Image src="/gundam-factory.png" width="500px" alignSelf={"center"} />
        <Text>
          Here, we can see a common Gunpla interface that three different Gunpla
          models inherit: Zaku, WingZero, and RX78. We can also see a Gunpla
          factory that will create one of three Gunpla models depending on the
          type specified by the client. Below is code implemented in Java to
          achieve this.
        </Text>
        <Heading size={"lg"}>Code</Heading>
        <Flex direction={"column"}>
          <Text>Java</Text>
          <PatternBlock
            code={gundamFactoryJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Text>
          This example depicts a Gundam factory that creates a new Gunpla hobby
          model. We can use a Factory to create different types of Gunpla models
          without the client needing to know the details of how each model is
          constructed. However, we still have a problem: How can we create the
          same Gunplas with different Grades? I.E, High Grade, Master Grade, and
          Perfect Grade?{" "}
        </Text>
        <Text as={"div"}>
          We can solve this problem by implementing a pattern called the{" "}
          <Text as={"span"} textDecoration={"underline"}>
            Abstract Factory
          </Text>{" "}
          . Click next to learn how the Abstract Factory works, and how this can
          solve our problem with the various grades of Gunpla.
        </Text>
        <Button
          variant={"outline"}
          colorScheme={"green"}
          as={RouterLink}
          to={"/creational/abstract-factory"}
          alignSelf={"end"}
          width={"100px"}
          justifyContent={"space-between"}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Next
          <Icon as={FiArrowRight} />
        </Button>
      </Flex>
    </Post>
  );
};

export default FactoryPage;
