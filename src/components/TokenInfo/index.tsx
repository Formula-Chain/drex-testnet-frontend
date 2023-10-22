import { FC, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

import { Box, StackDivider, VStack } from "@chakra-ui/react";
import { ERC20 } from "../../typechain-types";
import { BigNumber } from "ethers";
import { formatUnits } from "@ethersproject/units";
import { useToken } from "../../hooks/useToken";

type TokenInfoProps = {
  contract: ERC20;
};

export const TokenInfo: FC<TokenInfoProps> = (props) => {
  const {tokenInfo, getBalance} = useToken(props.contract);
  const [balance, setBalance] = useState<BigNumber>();

  useEffect(() => {
    props.contract.signer.getAddress().then((address) => {
      getBalance(address).then((balance) => {
        setBalance(balance);
      });
    });
  }, [props.contract, getBalance]);

  if (!tokenInfo || !balance) {
    return <h4 className={styles.title}>Loading...</h4>;
  }

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box>{`Balance: ${formatUnits(balance, tokenInfo!.decimals)} ${tokenInfo!.symbol}`}</Box>
    </VStack>
  );
};
