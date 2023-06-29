import { Box } from "@chakra-ui/react";

interface iLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<iLayoutProps> = ({ children }) => {
  return (
    <Box width={"100%"} height={"100%"}>
      {children}
    </Box>
  );
};

export default Layout;
