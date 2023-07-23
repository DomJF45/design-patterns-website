import { Box, BoxProps } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface PostProps extends BoxProps {
  children: React.ReactNode;
}

const Post: FunctionComponent<PostProps> = ({ children, ...rest }) => {
  return (
    <Box
      width={{ base: "95%", md: "500px", lg: "900px" }}
      maxW={"1100px"}
      height={"100%"}
      py={5}
      display={"flex"}
      alignSelf={"center"}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Post;
