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
import { prototypeJava } from "./patternCode";
import { examplePrototype } from "../AbstractFactory/patternCode";
import Author from "../../components/Author";
import { PrevButton, NextButton } from "../../components/NextButton";
import { NavItem } from "../../data/interfaces";

const PrototypePage = () => {
  const overview1 = useRef(null);
  const uml1 = useRef(null);
  const code1 = useRef(null);
  const pros = useRef(null);
  const cons = useRef(null);
  const registry = useRef(null);
  const registryUML = useRef(null);
  const example = useRef(null);
  const example2 = useRef(null);
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
      name: "Registry",
      ref: registry,
      subNav: [
        {
          name: "UML",
          ref: registryUML,
        },
      ],
    },
    {
      name: "Example",
      ref: example,
      subNav: [
        {
          name: "Hospital",
          ref: example2,
        },
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
        <Heading textAlign={"start"} color={"green.400"}>
          Prototype{" "}
          <Text as={"span"} color={"black"}>
            Pattern
          </Text>
        </Heading>
        <Heading ref={overview1}>Overview</Heading>
        <Text>
          The purpose of the prototype design pattern is to simplify copying an
          object without having to repeat every step that was necessary to setup
          and modify it. Think about it like building in a copy and paste
          function to every class and object that can get you an identical
          working instance without dealing with all of the hassle every time.
          This can make it much easier and quicker to create objects, while also
          bypassing the minefield of issues caused by trying to access private
          methods and member variables.
        </Text>
        <Heading size={"lg"} ref={uml1}>
          UML
        </Heading>
        <Image src="/prototype-uml.png" width="700px" alignSelf={"center"} />
        <Flex direction={"column"} ref={code1}>
          <Text>Java</Text>
          <PatternBlock
            code={prototypeJava}
            language="java"
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Heading size={"lg"} ref={pros}>
          Pros:
        </Heading>
        <UnorderedList>
          <ListItem>No Coupling to Concrete Classes</ListItem>
          <ListItem>
            Iitialization code can be simplified down to calling the clone
            function
          </ListItem>
          <ListItem>Quicker and easier creation of complex objects</ListItem>
          <ListItem>No need for inheritance</ListItem>
        </UnorderedList>
        <Heading size={"lg"} ref={cons}>
          Cons:
        </Heading>
        <UnorderedList>
          <ListItem>Not all complex objects can be cloned easy</ListItem>
          <ListItem>
            Circular references and logic referring to other objects might
            require extra careful handling
          </ListItem>
        </UnorderedList>
        <Heading ref={registry}>Prototype Registry</Heading>
        <Text>
          In some cases and applications, we’d like a bit more structure to help
          us keep track of all of our different prototypes and make it even
          nicer for us to pull out the object we’re looking for. For this, you
          can create a Registry object to keep track of all your prototypes and
          even provide useful methods for selecting and searching via member
          variables and configurations. It makes the interface and concrete
          classes just a bit more complex, but it’s worth it for the added
          advantages and benefits.
        </Text>
        <Heading size={"lg"} ref={registryUML}>
          Registry UML
        </Heading>
        <Image
          src={"/prototype-registry-uml.png"}
          width={"600px"}
          alignSelf={"center"}
        />
        <Heading size={"lg"} ref={example}>
          Why Would We Want This?
        </Heading>
        <Text>
          Here’s the amazing section where we get to discuss a fun, imagination
          enriching, completely original scenario where this particular design
          pattern makes our lives a whole lot easier. I (the writer of this page
          at least) find artificial intelligence to be really amazing and
          interesting, and I figured that there had to be a really good use for
          the Prototyping design pattern in a machine learning problem space. It
          didn’t take long for me to realize that not only was there a realistic
          application already built in to how neural networks work (explanation
          coming soon), but there’s also a really fascinating and 100% original
          application that totally doesn’t relate to research I’ve previously
          done and will shamelessly promote{" "}
          <Link
            href="https://ieeexplore.ieee.org/abstract/document/9401810/"
            target="_blank"
            rel="noreferrer"
            color={"green.400"}
            textDecoration={"underline"}
          >
            (Improving Pneumonia Diagnosis Accuracy via Systematic Convolutional
            Neural Network-Based Image Enhancement | IEEE Conference Publication
            | IEEE Xplore).
          </Link>{" "}
          <br />
          <br />
          Firstly, a brief explanation about neural networks and how they
          function as previously promised. Neural networks are large networks of
          connected nodes that do math and behave similarly to the synapses in
          the human brain. Data comes into the node, some mathematical formula
          changes the data and the weights and biases get applied to that,
          before the activation function decides whether that data should be
          sent on to the next node or layer of node in the network. Apply this
          all the way through the network, and you get an output at the end. If
          the result is wrong, an algorithm tweaks the activation functions,
          biases, and weights of the network and you try again. Over the course
          of thousands or millions of attempts, the networks can get pretty good
          at whatever task they’re geared towards. You can see a handy
          visualization of how convolutional networks work to convert an image
          of an object into an accurate classification:{" "}
          <Link
            href="https://poloclub.github.io/cnn-explainer/"
            target="_blank"
            rel={"noreferrer"}
            color={"green.400"}
            textDecoration={"underline"}
          >
            CNN Explainer (poloclub.github.io).
          </Link>{" "}
        </Text>
        <Image
          src={"/prototype-neural-net.png"}
          width={"500px"}
          alignSelf={"center"}
        />
        <Text>
          So now we come to the inherent reason behind why neural networks were
          chosen to demonstrate the prototype pattern: transfer learning. As
          previously mentioned, these networks can take a lot of processing and
          training before they’re any good at the task they’ve been assigned.
          This compounds with network size and complexity, which can mean that
          you either need some serious compute power on the scale of Google or
          several year’s worth of patience to train the increasingly bigger and
          better models that have become more popular. One of the ways around
          this is transfer learning, where you can copy the weights and biases
          of an already trained network and do the final bit of training to fine
          tune it to work on your particular problem. See what I mean about a
          built-in use for prototype duplication?
        </Text>
        <Heading size={"lg"} ref={example2}>
          The Real Scenario
        </Heading>
        <Text>
          Imagine that you’re an administrator in a brand new, state-of-the-art
          hospital built right here in your city of choice. Not only does it
          have all the bells and whistles and beeping machines, but it’s been
          decided that a new neural network-based pre-diagnosis system should be
          implemented to help determine what help the patient needs before a
          real doctor can see them. This should help speed up check-ins and make
          the doctor and nurse scheduling process much more efficient.
          <br />
          <br />
          It was decided that a network should be trained and made available to
          each patient based on their age, sex, and ethnicity. This makes a lot
          of sense because normal body function varies wildly depending on these
          factors and a one size fits all diagnosis network could make some
          severe errors and we definitely don’t want that on our insurance!
          <br />
          <br />
          So, the data scientists on staff took a pretty good diagnosis network
          and configured it so that the patient’s age, sex, and ethnicity were
          inputs. They trained the network to recognize these different inputs
          and change its behavior to give a better diagnosis, but this brings up
          an important issue. All of the information used to configure the
          networks is personal health information and directly protected under
          law, so we made sure that everything in the network classes was
          private or unreachable.
          <br />
          <br />
          We always want to keep improving the service for our patients, so the
          techs need to periodically get copies of the networks to do more
          testing and training. Just like that, our hospital has a serious need
          to be able to easily clone configured diagnosis networks while
          allowing for the protection of client data. Not to mention that we
          should be able to provide a configured network for any patients that
          walk in the door. Here’s where the Prototype design pattern really
          shines! We’ll be implementing a network registry and associated search
          functions alongside the prototype interface to ensure that our
          patients get the best service we can provide!
        </Text>
        <Heading size={"lg"} ref={exampleUML}>
          Example UML
        </Heading>
        <Image
          src={"/prototype-example-uml.png"}
          width={"600px"}
          alignSelf={"center"}
        />
        <Heading size="lg" ref={exampleCode}>
          Code
        </Heading>
        <Flex direction={"column"}>
          <Text>Java</Text>
          <PatternBlock
            code={examplePrototype}
            language="java"
            showLineNumbers={true}
            startingLineNumber={1}
          />
        </Flex>
        <Author contentAuthor="Justin Hall" />
        <Flex width={"100%"} justifyContent={"space-between"}>
          <PrevButton link="/creational/builder" />
          <NextButton link="/creational/singleton" />
        </Flex>
      </Flex>
    </Post>
  );
};

export default PrototypePage;
