import { Box } from "@chakra-ui/react";

function Post({ children }: { children: React.ReactNode }) {
  return (
    <Box
      width={{ base: "95%", md: "500px", lg: "700px", xl: "95%" }}
      maxW={"1100px"}
      height={"100%"}
      py={5}
      display={"flex"}
      alignSelf={"center"}
    >
      {children}
    </Box>
  );
}

export default Post;
