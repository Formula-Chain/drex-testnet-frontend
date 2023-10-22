import { RealDigital } from "../typechain-types";
import { useToken } from "./useToken";

export function useReal(contract: RealDigital) {
  const {tokenInfo, getBalance} = useToken(contract);

  const isEnabled = async (address: string): Promise<boolean> => {
    return await contract.verifyAccount(address);
  }

  return {
    tokenInfo,
    getBalance,
    isEnabled
  };
}
