import { Box } from "@chakra-ui/react";

function Post({ children }: { children: React.ReactNode }) {
  return (
    <Box
      width={{ base: "95%", md: "500px", lg: "700px", xl: "900px" }}
      height={"100%"}
      p={5}
      display={"flex"}
      alignSelf={"center"}
    >
      {children}
    </Box>
  );
}

export default Post;
