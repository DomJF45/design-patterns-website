import { useState } from "react";
import { Classification } from "../../data/classification";
import { FunctionComponent } from "react";
import { Variants, motion } from "framer-motion";
import { Button, Icon } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

interface DropDownProps {
  patternGroup: Classification[];
  groupName: string;
}

const DropDown: FunctionComponent<DropDownProps> = ({
  patternGroup,
  groupName,
}) => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      style={{
        height: "100%",
        width: "300px",
      }}
    >
      <Button
        as={motion.button}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen((prev) => !prev)}
        width={"100%"}
        justifyContent={"space-between"}
        colorScheme="green"
      >
        {groupName}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{
            duration: 0.2,
          }}
          style={{ originY: 0.55 }}
        >
          <Icon as={FiChevronDown} />
        </motion.div>
      </Button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#68D391",
          paddingBlock: 10,
        }}
      >
        {patternGroup.map((pattern, index) => (
          <motion.li
            variants={itemVariants}
            key={index}
            style={{
              listStyle: "none",
              marginInline: 20,
              padding: 10,
              border: "1px solid #ffffff87",
              borderRadius: "5px",
              height: "100%",
              backgroundColor: "whitesmoke",
              boxShadow: "1px 1px 2px #38A169",
            }}
          >
            {pattern.name}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default DropDown;
