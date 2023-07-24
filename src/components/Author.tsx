import { Heading, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface AuthorProps {
  contentAuthor: string;
}

const Author: FunctionComponent<AuthorProps> = ({ contentAuthor }) => {
  return (
    <Stack>
      <Heading size="sm">Written By: </Heading>
      <Text color="gray.600">{contentAuthor}</Text>
    </Stack>
  );
};

export default Author;
