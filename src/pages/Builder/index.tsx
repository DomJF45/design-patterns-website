import { useRef } from "react";
import {
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Post from "../../components/Post";
import PatternBlock from "../../components/PatternCodeBlock";
import { concreteBuilder, routerBuilder } from "./builderCode";
import Author from "../../components/Author";
import { PrevButton, NextButton } from "../../components/NextButton";
import { NavItem } from "../../data/interfaces";

const BuilderPage = () => {
  const overview1 = useRef(null);
  const uml1 = useRef(null);
  const code1 = useRef(null);
  const pros = useRef(null);
  const cons = useRef(null);
  const example = useRef(null);
  const exampleUML = useRef(null);
  const exampleCode = useRef(null);

  const navList: NavItem[] = [
    {
      name: "Overview",
      ref: overview1,
      subNav: [
        {
          name: "UML",
          ref: uml1,
        },
        {
          name: "Code",
          ref: code1,
        },
      ],
    },
    {
      name: "Pros",
      ref: pros,
    },
    {
      name: "Cons",
      ref: cons,
    },
    {
      name: "Router Example",
      ref: example,
      subNav: [
        {
          name: "Router UML",
          ref: exampleUML,
        },
        {
          name: "Router Code",
          ref: exampleCode,
        },
      ],
    },
  ];

  return (
    <Post navList={navList}>
      <Flex
        direction={"column"}
        width={"100%"}
        justifyContent={"center"}
        gap={8}
      >
        <Heading textAlign={"start"} color={"green.400"}>
          Builder{" "}
          <Text as={"span"} color={"black"}>
            Pattern
          </Text>
        </Heading>
        <Heading ref={overview1}>Overview</Heading>
        <Text>
          The Builder Pattern is a creational design pattern that separates the
          construction of complex objects from their representation. It allows
          you to create objects step by step, piece by piece, and provides a
          flexible way to construct objects with different configurations or
          variations.
          <br />
          <br />
          When constructing complex objects, especially those with multiple
          configuration options or variations, a constructor with many
          parameters can become unwieldy and hard to use. Additionally,
          subclassing to create variations of the object can lead to a large
          number of classes and increased complexity.
          <br />
          <br />
          The Builder Pattern aims to solve these problems by encapsulating the
          construction of complex objects and providing an interface (the
          builder) that allows step-by-step construction of the object. It
          separates the construction process from the representation, enabling
          the same construction process to create different representations.
        </Text>
        <Heading size={"lg"} ref={uml1}>
          UML
        </Heading>
        <Image width={"500px"} src={"/builder-uml.png"} alignSelf={"center"} />
        <Heading size={"lg"} ref={code1}>
          Code
        </Heading>
        <Flex direction={"column"}>
          <Text>Java</Text>
          <PatternBlock
            code={concreteBuilder}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Heading size="lg" ref={pros}>
          Pros:
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Flexible Contruction Process:{" "}
            </Text>{" "}
            The Builder Pattern allows you to construct complex objects step by
            step, providing flexibility in setting different configurations and
            variations.{" "}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Reusable Building Process:{" "}
            </Text>{" "}
            he same construction process (the builder) can be used to create
            different representations of the product, promoting code
            reusability.{" "}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Clear Separation of Concerns:{" "}
            </Text>{" "}
            The pattern separates the construction logic from the products
            representation, making the codebase easier to maintain and modify.{" "}
          </ListItem>
        </UnorderedList>
        <Heading size="lg" ref={cons}>
          Cons:
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Code Overhead:{" "}
            </Text>{" "}
            Implementing the Builder Pattern can introduce additional code and
            complexity, especially when dealing with numerous attributes and
            variations of the product.{" "}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Increased Classes:{" "}
            </Text>{" "}
            The pattern requires additional classes for the product, builder,
            and potentially the director, leading to an increase in the number
            of classes in the codebase.{" "}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Learning Curve:{" "}
            </Text>{" "}
            Developers unfamiliar with the pattern might need time to understand
            its concepts and how to implement it correctly.{" "}
          </ListItem>
        </UnorderedList>
        <Heading ref={example}>HTTP Router</Heading>
        <Image width={"500px"} alignSelf={"center"} src={"/router.png"} />
        <Text>
          HTTP routing is a fundamental building block for web applications,
          enabling them to provide different functionalities based on the
          requested URLs. It allows developers to structure their code
          logically, organizing related routes and functionality in separate
          handlers or controllers.
          <br />
          <br />
          In addition, HTTP routers are commonly implemented using web
          frameworks like Express.js for Node.js applications, Flask for Python,
          Spring Boot for Java, and many others. These frameworks provide
          built-in routing capabilities, making it easy for developers to define
          routes and handle incoming requests efficiently.
        </Text>
        <Image src={"/tree-router.png"} width={"500px"} alignSelf={"center"} />
        <Text>
          Many web frameworks and libraries use tree or trie-based routing
          internally to optimize route handling. For example, Express.js for
          Node.js uses a trie-based router, and Gorilla Mux for Go uses a
          tree-based router.
          <br />
          <br />
          While we won&apos;t go into how the trie / tree based routing works
          (although, if you want a great article that explains this, you can
          read{" "}
          <Link
            href={
              "https://dev.to/bmf_san/introduction-to-golang-http-router-made-with-nethttp-3nmb"
            }
            target="_blank"
            rel="noreferrer"
            color={"green.400"}
            textDecoration={"underline"}
          >
            this article
          </Link>
          ), we will go over a goofy way to create different HTTP routers with a
          builder pattern.
        </Text>
        <Heading size={"lg"} ref={exampleUML}>
          UML
        </Heading>
        <Image
          width={"500px"}
          alignSelf={"center"}
          src={"/router-builder-uml.png"}
        />
        <Text>
          Here, we see how there is a common RouterBuilder interface shared
          between the APIRouterBuilder and the UserRouterBuilder. We also see
          how the RouterDirector class creates and instantiates a specific
          builder to construct either of the different Routers. While routing
          isn&apos;t typically done like this, it can be useful if different
          routes share a similar creation process.
        </Text>
        <Heading size={"lg"} ref={exampleCode}>
          Code
        </Heading>
        <Flex direction={"column"}>
          <Text>Java</Text>
          <PatternBlock
            code={routerBuilder}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Text>
          Now that we&apos;ve learned about the Builder pattern, it&apos;s pros
          and cons, and the problems it solves, let&apos;s move on to the next
          design pattern: the{" "}
          <Text as={"span"} textDecoration={"underline"}>
            Prototype
          </Text>
        </Text>
        <Author contentAuthor="Dominick Founds" />
        <Flex width={"100%"} justifyContent={"space-between"}>
          <PrevButton link="/creational/abstract-factory" />
          <NextButton link="/creational/prototype" />
        </Flex>
      </Flex>
    </Post>
  );
};

export default BuilderPage;
