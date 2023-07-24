import { Box, BoxProps } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import PageNav from "./Navigation/PageNav";
import { NavItem } from "../data/interfaces";

interface PostProps extends BoxProps {
  children: React.ReactNode;
  navList?: NavItem[];
}

const Post: FunctionComponent<PostProps> = ({ children, navList, ...rest }) => {
  return (
    <Box
      width={{ base: "95%", sm: "100%" }}
      maxW={"1200px"}
      height={"100%"}
      py={5}
      display={"flex"}
      {...rest}
      position={"relative"}
      justifyContent={navList ? "start" : "center"}
      gap={{ sm: 10, lg: 120 }}
    >
      <Box width={{ base: "100%", md: navList ? "60%" : "90%" }}>
        {children}
      </Box>
      <PageNav navList={navList} />
    </Box>
  );
};

export default Post;
