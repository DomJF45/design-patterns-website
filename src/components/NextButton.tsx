import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FunctionComponent } from "react";

interface NextButtonProps extends ButtonProps {
  link: string;
}

export const NextButton: FunctionComponent<NextButtonProps> = ({
  link,
  ...rest
}) => {
  return (
    <Button
      variant={"outline"}
      colorScheme={"green"}
      as={RouterLink}
      to={link}
      alignSelf={"end"}
      width={"100px"}
      justifyContent={"space-between"}
      onClick={() => window.scrollTo({ top: 0 })}
      mb={10}
      {...rest}
    >
      Next
      <Icon as={FiArrowRight} />
    </Button>
  );
};

export const PrevButton: FunctionComponent<NextButtonProps> = ({
  link,
  ...rest
}) => {
  return (
    <Button
      variant={"outline"}
      colorScheme={"green"}
      as={RouterLink}
      to={link}
      alignSelf={"start"}
      width={"100px"}
      justifyContent={"space-between"}
      onClick={() => window.scrollTo({ top: 0 })}
      mb={10}
      {...rest}
    >
      <Icon as={FiArrowLeft} />
      Back
    </Button>
  );
};
