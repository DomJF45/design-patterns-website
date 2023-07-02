import { Box, Flex } from "@chakra-ui/react";

interface iLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<iLayoutProps> = ({ children }) => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      direction={"column"}
      justifyContent={"center"}
    >
      {children}
    </Flex>
  );
};

export default Layout;
