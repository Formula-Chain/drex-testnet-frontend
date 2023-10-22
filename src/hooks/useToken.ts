import { BigNumber } from "ethers";
import * as React from "react";
import { ERC20 } from "../typechain-types";

type TokenInfo = {
  symbol: string;
  decimals: number;
};

export function useToken(contract: ERC20) {
  const [tokenInfo, setTokenInfo] = React.useState<TokenInfo>();

  React.useEffect(() => {
    const loadTokenInfo = async () => {
      const symbol = await contract.symbol();
      const decimals = await contract.decimals();
      setTokenInfo({ symbol, decimals });
    };

    loadTokenInfo();
  }, [contract]);

  const getBalance = async (address: string): Promise<BigNumber> => {
    return await contract.balanceOf(address);
  }

  return {
    tokenInfo,
    getBalance,
  };
}
