import { FC } from "react";
import { Flex } from "@chakra-ui/layout";
import styles from "../../styles/Home.module.css";
import { DrexContracts } from "../../hooks/useDrexContracts";
import { Box, StackDivider, VStack } from "@chakra-ui/react";

type ParticipantPanelProps = {
  isParticipant: boolean;
  contracts: DrexContracts;
};

export const ParticipantPanel: FC<ParticipantPanelProps> = (props) => {
  if (!props.isParticipant) {
    return <h2 className={styles.title}>Switch to participant wallet</h2>;
  }

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box>RealDigital info box placeholder</Box>
      <Box>STR interface placeholder</Box>
      <Box>RealTokenizado interface placeholder</Box>
      <Box>RealDigitalDefaultAccount interface placeholder</Box>
      <Box>RealDigitalEnableAccount interface placeholder</Box>
    </VStack>
  );
};
