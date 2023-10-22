import { Chain } from "@wagmi/core";

export const drex: Chain = {
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
  }
} as Chain;
