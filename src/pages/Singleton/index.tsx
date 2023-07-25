import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Post from "../../components/Post";
import PatternBlock from "../../components/PatternCodeBlock";
import { SingletonJava, EagerSingletonJava, GunplaSingletonJava } from "./patternCode";
import { PrevButton } from "../../components/NextButton";
import { useRef } from "react";
import { NavItem } from "../../data/interfaces";

const SingletonPage = () => {
  const overview1 = useRef(null);
  const uml1 = useRef(null);
  const code1 = useRef(null);
  const code2 = useRef(null);
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
      name: "Code",
      ref: code1,
      subNav: [
        {
          name: "Lazy Initialization",
          ref: code1,
        },
        {
          name: "Eager Initialization",
          ref: code2,
        },
      ],
    },
    {
      name: "Example Usage",
      ref: example,
      subNav: [
        {
          name: "UML",
          ref: exampleUML,
        },
        {
          name: "Code",
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
        <Heading textAlign={"start"} color={"green.400"} ref={overview1}>
          Singleton{" "}
          <Text as={"span"} color="black">
            Pattern
          </Text>
        </Heading>
        <Heading>Overview</Heading>
        <Text>
          The Singleton pattern is a <strong>creational design pattern for classes</strong> that ensures only a single instance of a class can exist at any one time. It is used to provide a global point of access to a class instance, including its data and functions. Using this pattern offers benefits similar to global variables, such as allowing the same data to be shared between different parts of a program, but without the drawbacks of using these variables directly (global namespace pollution, for example).
        </Text>
        <Heading size={"lg"} textAlign={"start"} ref={uml1}>
          UML
        </Heading>
        <Image src="/singleton-uml.png" width="700px" alignSelf={"center"} />
        <Heading>Pros and Cons</Heading>
        <Text textAlign={"start"} fontWeight={"bold"} ref={pros}>Pros: </Text>
        <ul>
          <li>
            <strong>Strongly controlled access to single instance</strong> - The Singleton class has sole responsibility for creating its own instance, and preventing any other class from doing so. This is useful because it prevents other classes from creating their own instances of the Singleton class, ensuring that all objects access the single instance of the class.
          </li>
          <li>
            <strong>Reduced namespace pollution</strong> - The Singleton pattern is a good alternative to global variables, which are generally considered bad practice because they can be accessed and modified from anywhere in a program. The Singleton pattern avoids this problem by ensuring that only one instance of a class can exist at any one time, and that modifications to the instance can only be done in a controlled way.
          </li>
          <li>
            <strong>Lazy initialization</strong> - The Singleton pattern allows for lazy initialization of the class instance, meaning that the instance is not created until it is first needed. This can save resources such as memory and processing time, until they are needed by the instance.
          </li>
          <li>
            <strong>Thread safety</strong> - The Singleton pattern is generally thread-safe, meaning that it can be used in multi-threaded programs without causing any problems. This is because the Singleton class has sole responsibility for creating its own instance, and preventing any other class from doing so. Note that there is a potential performance cost and some considerations associated with this, which we will discuss in the Cons section.
          </li>
        </ul>
        <Text textAlign={"start"} fontWeight={"bold"} ref={cons}>Cons: </Text>
        <ul>
          <li>
            <strong>Multi-threaded performance concerns</strong> - While the Singleton pattern is generally thread-safe a problem can occur if too many threads are attempting to access a lazily-instantiated Singleton instance at the same time. This can cause a bottleneck in the program, as each thread will have to wait for the previous one to finish before it can access the instance. In some cases, improper management of a Singleton across multiple threads may even result in multiple instances of the Singleton being created, which defeats the purpose of the pattern. Both of these issues can be avoided by using eager initialization, which creates the single Singleton instance when the class is loaded into memory rather than when it is first needed. An example of eager initialization is shown below.
          </li>
        </ul>
        <Heading ref={code1}>Code (Lazy Instatiation)</Heading>
        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={SingletonJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Heading ref={code2}>Code (Eager Instatiation)</Heading>
        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={EagerSingletonJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Heading ref={example}>Example Usage - Gunpla DB Connection Pool</Heading>
        <Image src="/gunpla-singleton-dbpool.png" width="700px" alignSelf={"center"} ref={exampleUML} />
        <Text>
          Going along with the Gundam theme we&apos;ve used for the Factory and Abstract Factory patterns, an example employing the Singleton Pattern is as follows:
          Consider we want to load information about all available Gunplas from a database. We could employ a Singleton pattern to the class which loads this information, ensuring that only one instance of the class exists at any one time. This would allow us to access the information from anywhere in our program, without having to worry about creating multiple instances of the class or loading the information multiple times. This is a common approach when working with databases, as it allows us to avoid the overhead of creating a new connection to the database each time we need to access it. In other scenarios, rather than have the Singleton maintain only a single connection to the database, we could implement a connection &quot;pool,&quot; which would allow us to maintain multiple connections to the database, and reuse them as needed. Rather than spread database connection code all over our program, making connection calls harder to debug, using a connection pool in this way via the Singleton pattern would allow us to keep track of all open connections in one place.
        </Text>
        <Heading ref={exampleCode}>Example Code</Heading>
        <Flex direction="column">
          <Text>Java</Text>
          <PatternBlock
            code={GunplaSingletonJava}
            language={"java"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <PrevButton link="/creational/prototype" />
        </Flex>
      </Flex>
    </Post>
  );
};

export default SingletonPage;
