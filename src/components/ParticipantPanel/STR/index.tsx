import { FC, useState } from "react";
import { Box, Button, Input, SimpleGrid } from "@chakra-ui/react";
import { RealDigital, STR as STRContract } from "../../../typechain-types";
import { parseReal } from "../../../utils/parseFormatReal";

type STRProps = {
  realDigital: RealDigital;
  str: STRContract;
};

export const STR: FC<STRProps> = (props) => {
  const [amount, setAmount] = useState<string>("");

  const handleMint = async () => {
    const amountBn = parseReal(amount);
    console.log(`Minting ${amountBn} BRL...`);
    const mintTx = await props.str.requestToMint(amountBn);
    console.log(`Mint tx: ${mintTx.hash}`);
    await mintTx.wait();
    console.log(`Mint tx mined`);
  }

  const handleBurn = async () => {
    const amountBn = parseReal(amount);
    console.log(`Burning ${amountBn} BRL...`);
    const allowTx = await props.realDigital.increaseAllowance(props.str.address, amountBn);
    await allowTx.wait();
    console.log(`Allowance increased`);
    const burnTx = await props.str.requestToBurn(amountBn);
    console.log(`Burn tx: ${burnTx.hash}`);
    await burnTx.wait();
    console.log(`Burn tx mined`);
  }

  if (!props.realDigital || !props.str) {
    return null;
  }

  return (
    <SimpleGrid spacing={4} columns={2}>
      <Box>
        <Input
          placeholder="Enter Real amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
      </Box>
      <Box>
        <SimpleGrid spacing={4} columns={2}>
          <Button colorScheme="green" size="lg" onClick={handleMint}>
            Mint
          </Button>
          <Button colorScheme="red" size="lg" onClick={handleBurn}>
            Burn
          </Button>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
};
