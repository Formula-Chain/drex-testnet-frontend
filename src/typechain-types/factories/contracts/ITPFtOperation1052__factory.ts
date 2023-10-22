/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITPFtOperation1052,
  ITPFtOperation1052Interface,
} from "../../contracts/ITPFtOperation1052";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "operationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cnpj8Sender",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cnpj8Receiver",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ITPFtOperation1052.CallerPart",
        name: "callerPart",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "acronym",
            type: "string",
          },
          {
            internalType: "string",
            name: "code",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITPFtOperation1052.TPFtData",
        name: "tpftData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tpftAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unitPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "financialValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "CommandEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "operationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ITPFtOperation1052.CallerPart",
        name: "callerPart",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "acronym",
            type: "string",
          },
          {
            internalType: "string",
            name: "code",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITPFtOperation1052.TPFtData",
        name: "tpftData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tpftAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unitPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "financialValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "CommandTradeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "operationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cnpj8Sender",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cnpj8Receiver",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "acronym",
            type: "string",
          },
          {
            internalType: "string",
            name: "code",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITPFtOperation1052.TPFtData",
        name: "tpftData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tpftAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unitPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "financialValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OperationEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "operationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "acronym",
            type: "string",
          },
          {
            internalType: "string",
            name: "code",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITPFtOperation1052.TPFtData",
        name: "tpftData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tpftAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unitPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "financialValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OperationTradeEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "operationId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cnpj8Sender",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cnpj8Receiver",
        type: "uint256",
      },
      {
        internalType: "enum ITPFtOperation1052.CallerPart",
        name: "callerPart",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "acronym",
            type: "string",
          },
          {
            internalType: "string",
            name: "code",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
        ],
        internalType: "struct ITPFtOperation1052.TPFtData",
        name: "tpftData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "tpftAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unitPrice",
        type: "uint256",
      },
    ],
    name: "trade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "operationId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "enum ITPFtOperation1052.CallerPart",
        name: "callerPart",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "acronym",
            type: "string",
          },
          {
            internalType: "string",
            name: "code",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
        ],
        internalType: "struct ITPFtOperation1052.TPFtData",
        name: "tpftData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "tpftAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unitPrice",
        type: "uint256",
      },
    ],
    name: "trade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITPFtOperation1052__factory {
  static readonly abi = _abi;
  static createInterface(): ITPFtOperation1052Interface {
    return new utils.Interface(_abi) as ITPFtOperation1052Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITPFtOperation1052 {
    return new Contract(address, _abi, signerOrProvider) as ITPFtOperation1052;
  }
}
