import { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Stack,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { FiHome, FiCompass, FiMenu } from "react-icons/fi";
import { TbBuildingFactory, TbBuildingFactory2 } from "react-icons/tb";
import { PiFactoryLight } from "react-icons/pi";
import { GiFactoryArm, GiPodiumWinner } from "react-icons/gi";
import { IconType } from "react-icons";
import { RiSketching } from "react-icons/ri";
import { ReactText } from "react";
import { useParams } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href?: string;
  subNav?: LinkItemProps[];
  sublabel?: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/" },
  {
    name: "Creational",
    icon: TbBuildingFactory,
    subNav: [
      {
        name: "Factory",
        icon: TbBuildingFactory2,
        href: "/factory",
      },
      {
        name: "Abstract Factory",
        icon: PiFactoryLight,
        href: "/abstract-factory",
      },
      {
        name: "Builder",
        icon: GiFactoryArm,
        href: "/builder",
      },
      {
        name: "Prototype",
        icon: RiSketching,
        href: "/prototype",
      },
      {
        name: "Singleton",
        icon: GiPodiumWinner,
        href: "/singleton",
      },
    ],
  },
  { name: "About", icon: FiCompass, href: "/about" },
];

/* 
  -------------------------------------
  ------------------------------------- 
  --- ADAPTED FROM CHAKRA-TEMPLATES ---
  -------------------------------------
  -------------------------------------
*/

function NavBreadCrumb({ id }: { id: string }) {
  return (
    <Box my={4}>
      <Breadcrumb separator={"/"}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${id}`}>{id}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <NavBreadCrumb id={id ? id : ""} />
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" wordBreak={"break-word"}>
          Design{" "}
          <Text as={"span"} color={"green.500"}>
            {"Patterns"}
          </Text>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: LinkItemProps;
  children: ReactText;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Popover trigger={"hover"} placement="right-end">
      <PopoverTrigger>
        <Link
          href={link.href ? link.href : undefined}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "green.300",
              color: "white",
            }}
            {...rest}
          >
            {link.icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={link.icon}
              />
            )}
            {link.name}
          </Flex>
        </Link>
      </PopoverTrigger>
      {link.subNav && (
        <PopoverContent
          border={0}
          boxShadow={"xl"}
          bg={"white"}
          p={4}
          rounded={"xl"}
          minW={"sm"}
        >
          <Stack>
            {link.subNav.map((child) => (
              <DesktopSubNav key={child.name} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

const DesktopSubNav = ({ name, icon, href, sublabel }: LinkItemProps) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("green.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
            fontWeight={500}
          >
            {name}
          </Text>
          <Text fontSize={"sm"}>{sublabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green.400"} w={6} h={6} as={icon} />
        </Flex>
      </Stack>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Design{" "}
        <Text as={"span"} fontSize={"xs"} fontFamily={"mono"}>
          {"// patterns //"}
        </Text>
      </Text>
    </Flex>
  );
};
