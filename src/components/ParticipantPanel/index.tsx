import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { DrexContracts } from "../../hooks/useDrexContracts";
import { Box, StackDivider, VStack } from "@chakra-ui/react";
import { TokenInfo } from "../TokenInfo";
import { STR } from "./STR";


type ParticipantPanelProps = {
  isParticipant: boolean;
  contracts: DrexContracts;
};

export const ParticipantPanel: FC<ParticipantPanelProps> = (props) => {
  if (!props.contracts) {
    return null;
  }

  if (!props.isParticipant) {
    return <h2 className={styles.title}>Switch to participant wallet</h2>;
  }

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box>
        <TokenInfo contract={props.contracts.RealDigital}/>
      </Box>
      <Box><STR realDigital={props.contracts.RealDigital} str={props.contracts.STR} /></Box>
      <Box>
        <TokenInfo contract={props.contracts.RealTokenizado!} />
      </Box>
      <Box>RealDigitalDefaultAccount interface placeholder</Box>
      <Box>RealDigitalEnableAccount interface placeholder</Box>
    </VStack>
  );
};
