import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { NavItem } from "../../data/interfaces";

interface PageNavProps {
  navList?: NavItem[];
}

const PageNav: FunctionComponent<PageNavProps> = ({ navList }) => {
  function handleScroll(ref: React.RefObject<HTMLElement>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  if (navList === undefined) return;

  return (
    <Box
      width="230px"
      height={"100%"}
      position={"sticky"}
      top={5}
      display={{ base: "none", md: "flex" }}
      flexDir={"column"}
      backgroundColor={"whiteAlpha.800"}
      boxShadow={"md"}
      borderRadius={"8px"}
    >
      <Heading
        size={"lg"}
        textAlign={"center"}
        width={"100%"}
        padding={5}
        color={"gray.100"}
        bgGradient={"linear(to-b, purple.300, purple.400)"}
        borderTopRadius={"8px"}
      >
        Navigation
      </Heading>
      <UnorderedList gap={3} paddingY={5} fontSize={"lg"} color={"gray.700"}>
        {navList?.map((navItem, index) => (
          <>
            <ListItem
              key={index}
              as={"a"}
              listStyleType={"none"}
              cursor={"pointer"}
              onClick={() => handleScroll(navItem.ref)}
              my={3}
              fontWeight={"bold"}
              _hover={{
                textDecoration: "underline",
                color: "purple.300",
              }}
            >
              {navItem.name}
            </ListItem>
            <UnorderedList display={"flex"} flexDir={"column"}>
              {navItem.subNav &&
                navItem.subNav.map((subItem, index) => (
                  <ListItem
                    key={index}
                    as={"a"}
                    listStyleType={"none"}
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      color: "purple.300",
                    }}
                    onClick={() => handleScroll(subItem.ref)}
                  >
                    {subItem.name}
                  </ListItem>
                ))}
            </UnorderedList>
          </>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default PageNav;
