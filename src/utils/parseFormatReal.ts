import { BigNumberish, ethers } from "ethers";
import { REAL_DECIMALS } from "./constants";

export const parseReal = (realString: string) => {
    return ethers.utils.parseUnits(realString, REAL_DECIMALS);
}

export const formatReal = (realBigNumber: BigNumberish) => {
    return ethers.utils.formatUnits(realBigNumber, REAL_DECIMALS);
}
