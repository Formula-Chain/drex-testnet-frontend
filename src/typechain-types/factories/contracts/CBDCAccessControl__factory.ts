/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CBDCAccessControl,
  CBDCAccessControlInterface,
} from "../../contracts/CBDCAccessControl";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_authority",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "AuthorityChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "DisabledAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "EnabledAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ACCESS_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FREEZER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MOVER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorizedAccounts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "changeAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "disableAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "enableAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "verifyAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f2938038062000f29833981016040819052620000349162000245565b600280546001600160a01b0319166001600160a01b0383161790556200005c60008262000187565b600380546001600160a01b0319166001600160a01b038416179055620000a37f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8488362000187565b620000cf7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68362000187565b620000fb7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a8362000187565b620001277fe5ed70e23144309ce456cb48bf5e6d0d8e160f094a6d65ecf1d5b03cf292d8e68362000187565b620001537f7def632d64a7259044c921303d544f945a340c8d4334adc0e0bd830a54deb5288362000187565b6200017f7f92de27771f92d6942691d73358b3a4673e4880de8356f8f2cf452be87e02d3638362000187565b50506200027d565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000224576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001e33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b80516001600160a01b03811681146200024057600080fd5b919050565b600080604083850312156200025957600080fd5b620002648362000228565b9150620002746020840162000228565b90509250929050565b610c9c806200028d6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806384b61581116100ad578063d539139311610071578063d5391393146102f0578063d547741f14610317578063e63ab1e91461032a578063f16dfbe914610351578063f851a4401461037d57600080fd5b806384b61581146102845780638c79ba3a1461029757806391d14854146102aa578063a217fddf146102bd578063bf7e214f146102c557600080fd5b8063282c51f3116100f4578063282c51f3146101e9578063286041bd146102105780632f2ff15d1461023757806336568abe1461024a57806356b855aa1461025d57600080fd5b806301ffc9a71461013157806306a85f0f14610159578063116877cc1461018e578063248a9ca3146101a357806324ba5884146101c6575b600080fd5b61014461013f366004610a71565b610390565b60405190151581526020015b60405180910390f35b6101807f92de27771f92d6942691d73358b3a4673e4880de8356f8f2cf452be87e02d36381565b604051908152602001610150565b6101a161019c366004610ab7565b6103c7565b005b6101806101b1366004610ad2565b60009081526020819052604090206001015490565b6101446101d4366004610ab7565b60016020526000908152604090205460ff1681565b6101807f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b6101807fe5ed70e23144309ce456cb48bf5e6d0d8e160f094a6d65ecf1d5b03cf292d8e681565b6101a1610245366004610aeb565b61048b565b6101a1610258366004610aeb565b6104b5565b6101807f7def632d64a7259044c921303d544f945a340c8d4334adc0e0bd830a54deb52881565b6101a1610292366004610ab7565b610533565b6101a16102a5366004610ab7565b61062c565b6101446102b8366004610aeb565b61071f565b610180600081565b6003546102d8906001600160a01b031681565b6040516001600160a01b039091168152602001610150565b6101807f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101a1610325366004610aeb565b610748565b6101807f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b61014461035f366004610ab7565b6001600160a01b031660009081526001602052604090205460ff1690565b6002546102d8906001600160a01b031681565b60006001600160e01b03198216637965db0b60e01b14806103c157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6002546001600160a01b031633146104415760405162461bcd60e51b815260206004820152603260248201527f43424443416363657373436f6e74726f6c3a204f6e6c792061646d696e2063616044820152716e206368616e676520617574686f7269747960701b60648201526084015b60405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517f3430ad8dbed7c32bf49006f0d79d2ab70785ea13ebd4ef7d1b87e487ef08928c90600090a250565b6000828152602081905260409020600101546104a68161076d565b6104b0838361077a565b505050565b6001600160a01b03811633146105255760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610438565b61052f82826107fe565b5050565b7f7def632d64a7259044c921303d544f945a340c8d4334adc0e0bd830a54deb52861055d8161076d565b6001600160a01b03821660009081526001602052604090205460ff16156105dc5760405162461bcd60e51b815260206004820152602d60248201527f43424443416363657373436f6e74726f6c3a204163636f756e7420697320616c60448201526c1c9958591e48195b98589b1959609a1b6064820152608401610438565b6001600160a01b0382166000818152600160208190526040808320805460ff1916909217909155517f0211b3717a1e4e9d5dbd306d57337bd16341444ff1a3ca9d920060322b1aa6409190a25050565b7f7def632d64a7259044c921303d544f945a340c8d4334adc0e0bd830a54deb5286106568161076d565b6001600160a01b03821660009081526001602052604090205460ff166106d55760405162461bcd60e51b815260206004820152602e60248201527f43424443416363657373436f6e74726f6c3a204163636f756e7420697320616c60448201526d1c9958591e48191a5cd8589b195960921b6064820152608401610438565b6001600160a01b038216600081815260016020526040808220805460ff19169055517fa1505d69e69c406db19c16f3ec0bf25ae47eefb6ae68ab936d75df946fcd14cf9190a25050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6000828152602081905260409020600101546107638161076d565b6104b083836107fe565b6107778133610863565b50565b610784828261071f565b61052f576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556107ba3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610808828261071f565b1561052f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b61086d828261071f565b61052f5761087a816108bc565b6108858360206108ce565b604051602001610896929190610b3b565b60408051601f198184030181529082905262461bcd60e51b825261043891600401610bb0565b60606103c16001600160a01b03831660145b606060006108dd836002610bf9565b6108e8906002610c10565b67ffffffffffffffff81111561090057610900610c23565b6040519080825280601f01601f19166020018201604052801561092a576020820181803683370190505b509050600360fc1b8160008151811061094557610945610c39565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061097457610974610c39565b60200101906001600160f81b031916908160001a9053506000610998846002610bf9565b6109a3906001610c10565b90505b6001811115610a1b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106109d7576109d7610c39565b1a60f81b8282815181106109ed576109ed610c39565b60200101906001600160f81b031916908160001a90535060049490941c93610a1481610c4f565b90506109a6565b508315610a6a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610438565b9392505050565b600060208284031215610a8357600080fd5b81356001600160e01b031981168114610a6a57600080fd5b80356001600160a01b0381168114610ab257600080fd5b919050565b600060208284031215610ac957600080fd5b610a6a82610a9b565b600060208284031215610ae457600080fd5b5035919050565b60008060408385031215610afe57600080fd5b82359150610b0e60208401610a9b565b90509250929050565b60005b83811015610b32578181015183820152602001610b1a565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610b73816017850160208801610b17565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610ba4816028840160208801610b17565b01602801949350505050565b6020815260008251806020840152610bcf816040850160208701610b17565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176103c1576103c1610be3565b808201808211156103c1576103c1610be3565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610c5e57610c5e610be3565b50600019019056fea26469706673582212207dd4b57c94e696e76e8e046de8a704b06d72ce4329d925714f998f3ce03ee75e64736f6c63430008130033";

type CBDCAccessControlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CBDCAccessControlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CBDCAccessControl__factory extends ContractFactory {
  constructor(...args: CBDCAccessControlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _authority: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CBDCAccessControl> {
    return super.deploy(
      _authority,
      _admin,
      overrides || {}
    ) as Promise<CBDCAccessControl>;
  }
  override getDeployTransaction(
    _authority: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_authority, _admin, overrides || {});
  }
  override attach(address: string): CBDCAccessControl {
    return super.attach(address) as CBDCAccessControl;
  }
  override connect(signer: Signer): CBDCAccessControl__factory {
    return super.connect(signer) as CBDCAccessControl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CBDCAccessControlInterface {
    return new utils.Interface(_abi) as CBDCAccessControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CBDCAccessControl {
    return new Contract(address, _abi, signerOrProvider) as CBDCAccessControl;
  }
}