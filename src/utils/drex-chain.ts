import { Chain } from "@wagmi/core";
import { DEPLOYED_CONTRACTS } from "./constants";

export const drex = {
  id: 1217,
  name: "DREX FormulaChain testnet",
  network: "drex-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "DREX-BRL",
    symbol: "BRL",
  },
  rpcUrls: {
    default: `https://${process.env.NEXT_PUBLIC_DREX_USERNAME}:${process.env.NEXT_PUBLIC_DREX_PASSWORD}@testnet.formulachain.com/`,
  },
  blockExplorers: {
    default: { name: "none", url: "" },
  },
  contracts: DEPLOYED_CONTRACTS,
} as Chain;
