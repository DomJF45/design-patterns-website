import {
  Flex,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Post from "../../components/Post";
import PatternBlock from "../../components/PatternCodeBlock";
import { AbstractFactoryJava, abstractGundamFactory } from "./patternCode";
import { PrevButton, NextButton } from "../../components/NextButton";

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
          size={"2xl"}
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
          ensuring they are compatible within their families. The Abstract
          Factory Pattern works by creating families of related objects through
          the use of abstract classes or interfaces. The client code interacts
          with the Abstract Factory to create instances of the products, without
          knowing the specific classes of those products. When the client code
          needs to create an object, it requests the Abstract Factory to provide
          the product. The Abstract Factory internally decides which concrete
          factory to use based on the configuration or other conditions. The
          concrete factory then creates the specific product from its family and
          returns it to the client.
        </Text>
        <Heading size={"lg"}>UML</Heading>
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
        <Heading size={"lg"}>Pros:</Heading>
        <UnorderedList>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Abstraction of Object Creation:{" "}
            </Text>{" "}
            The Abstract Factory Pattern abstracts the process of object
            creation, providing interfaces or abstract classes to create related
            objects. This shields the client code from the complexities of
            concrete object instantiation and promotes loose coupling.
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Family of Related Objects:{" "}
            </Text>{" "}
            With the Abstract Factory Pattern, you can create families of
            related objects that work together. This ensures that the objects
            instantiated from the same factory are compatible and cohesive,
            providing a consistent and harmonious system.
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Flexibility and Scalability:{" "}
            </Text>{" "}
            Introducing new families of objects is relatively easy in the
            Abstract Factory Pattern. You can define new abstract classes and
            their concrete implementations without modifying the client code,
            making the system more adaptable to changes and future extensions.
          </ListItem>
        </UnorderedList>
        <Heading size={"lg"}>Cons:</Heading>
        <UnorderedList>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Increased Complexity:{" "}
            </Text>{" "}
            While the Abstract Factory Pattern provides flexibility, it can
            increase the complexity of the codebase. The numerous interfaces,
            abstract classes, and their implementations may be overwhelming for
            smaller and simpler systems.{" "}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Abstract Product Variations:{" "}
            </Text>{" "}
            The pattern is well-suited for scenarios where the product
            variations are known and can be organized into families. However, it
            may not handle situations where the product variations are vast and
            unpredictable, as maintaining abstract classes for all possible
            variations could become cumbersome.{" "}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Tight Coupling with Factories:{" "}
            </Text>{" "}
            Embracing the Abstract Factory Pattern might introduce some level of
            tight coupling with the concrete factory implementations. If the
            factories evolve or change, it could lead to modifications rippling
            through the system.
          </ListItem>
        </UnorderedList>
        <Heading>Abstract Gunpla Factory</Heading>
        <Image
          src={"/abstract-gunpla.gif"}
          width={"500px"}
          alignSelf={"center"}
        />
        <Text>
          Going back to our Gunpla example from the Factory Pattern, we can see
          how this encapsulation and creation of similar objects with varying
          suites applies to the different grades of Gunpla models.
        </Text>
        <Heading size={"lg"}>UML</Heading>
        <Image
          src="/abstract-gunpla-factory.png"
          width="900px"
          alignSelf={"center"}
        />
        <Text>
          Here, we can see the GunplaFactory interface to which the Gundam and
          Zaku factory both inherit. We also see how there are three Gunpla
          Grade interfaces: HighGradeGunpla, MasterGradeGunpla, and
          PerfectGradeGunpla, that extend a common Gunpla interface. The two
          Gunpla factories both create different grades of gunpla per each
          grade. Because there are three types of one Gunpla organized by grade,
          this makes a perfect use case for the abstract factory.
        </Text>
        <Heading size={"lg"}>Code</Heading>
        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={abstractGundamFactory}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Text>
          The next pattern we will go over is all about building complex objects
          step by step while keeping things flexible and customizable. Click
          next to learn about the{" "}
          <Text as={"span"} textDecoration={"underline"}>
            Builder
          </Text>{" "}
          Pattern.
        </Text>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <PrevButton link="/creational/factory" />
          <NextButton link="/creational/builder" />
        </Flex>
      </Flex>
    </Post>
  );
};

export default AbstractFactoryPage;
