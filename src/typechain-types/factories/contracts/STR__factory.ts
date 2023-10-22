/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { STR, STRInterface } from "../../contracts/STR";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RealDigital",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "requestToBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "requestToMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161037038038061037083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6102dd806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637d637f871461003b5780638a8b198f14610050575b600080fd5b61004e61004936600461021b565b610063565b005b61004e61005e36600461021b565b61015c565b60005460405163f16dfbe960e01b81523360048201526001600160a01b039091169063f16dfbe990602401602060405180830381865afa1580156100ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100cf9190610234565b6100f45760405162461bcd60e51b81526004016100eb9061025d565b60405180910390fd5b6000546040516340c10f1960e01b8152336004820152602481018390526001600160a01b03909116906340c10f19906044015b600060405180830381600087803b15801561014157600080fd5b505af1158015610155573d6000803e3d6000fd5b5050505050565b60005460405163f16dfbe960e01b81523360048201526001600160a01b039091169063f16dfbe990602401602060405180830381865afa1580156101a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c89190610234565b6101e45760405162461bcd60e51b81526004016100eb9061025d565b60005460405163079cc67960e41b8152336004820152602481018390526001600160a01b03909116906379cc679090604401610127565b60006020828403121561022d57600080fd5b5035919050565b60006020828403121561024657600080fd5b8151801515811461025657600080fd5b9392505050565b6020808252602a908201527f5354523a2043616c6c6572206973206e6f7420766572696669656420696e205260408201526919585b111a59da5d185b60b21b60608201526080019056fea2646970667358221220aad96b878c3f2dbed1c7e09fdad52b378596e27d3ed946953867826f80b8fd9964736f6c63430008130033";

type STRConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: STRConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class STR__factory extends ContractFactory {
  constructor(...args: STRConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<STR> {
    return super.deploy(_token, overrides || {}) as Promise<STR>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): STR {
    return super.attach(address) as STR;
  }
  override connect(signer: Signer): STR__factory {
    return super.connect(signer) as STR__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): STRInterface {
    return new utils.Interface(_abi) as STRInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): STR {
    return new Contract(address, _abi, signerOrProvider) as STR;
  }
}
