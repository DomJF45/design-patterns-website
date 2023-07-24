import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { useToast } from "@chakra-ui/react";
import Disclaimer from "./Disclaimer";

const PatternBlock = ({
  code,
  language,
  showLineNumbers,
  startingLineNumber,
}: {
  code: string;
  language: string;
  showLineNumbers: boolean;
  startingLineNumber: number;
}) => {
  const [isCopied, setCopies] = useState<boolean>(false);
  const toast = useToast();
  const handleCopy = () => {
    setCopies(true);
    toast({
      title: "Copied!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={{ ...dracula, mode: "dark" }}
        wrapLongLines={false}
        codeBlock
        copied={isCopied}
        onCopy={handleCopy}
      />
      <Disclaimer />
    </>
  );
};

export default PatternBlock;
