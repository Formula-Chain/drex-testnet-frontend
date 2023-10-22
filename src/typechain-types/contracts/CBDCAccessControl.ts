/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CBDCAccessControlInterface extends utils.Interface {
  functions: {
    "ACCESS_ROLE()": FunctionFragment;
    "BURNER_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "FREEZER_ROLE()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "MOVER_ROLE()": FunctionFragment;
    "PAUSER_ROLE()": FunctionFragment;
    "admin()": FunctionFragment;
    "authority()": FunctionFragment;
    "authorizedAccounts(address)": FunctionFragment;
    "changeAuthority(address)": FunctionFragment;
    "disableAccount(address)": FunctionFragment;
    "enableAccount(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "verifyAccount(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ACCESS_ROLE"
      | "BURNER_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "FREEZER_ROLE"
      | "MINTER_ROLE"
      | "MOVER_ROLE"
      | "PAUSER_ROLE"
      | "admin"
      | "authority"
      | "authorizedAccounts"
      | "changeAuthority"
      | "disableAccount"
      | "enableAccount"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "verifyAccount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ACCESS_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BURNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FREEZER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MOVER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "disableAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "enableAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccount",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ACCESS_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BURNER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FREEZER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MOVER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccount",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityChanged(address)": EventFragment;
    "DisabledAccount(address)": EventFragment;
    "EnabledAccount(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisabledAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnabledAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface AuthorityChangedEventObject {
  newAuthority: string;
}
export type AuthorityChangedEvent = TypedEvent<
  [string],
  AuthorityChangedEventObject
>;

export type AuthorityChangedEventFilter =
  TypedEventFilter<AuthorityChangedEvent>;

export interface DisabledAccountEventObject {
  member: string;
}
export type DisabledAccountEvent = TypedEvent<
  [string],
  DisabledAccountEventObject
>;

export type DisabledAccountEventFilter = TypedEventFilter<DisabledAccountEvent>;

export interface EnabledAccountEventObject {
  member: string;
}
export type EnabledAccountEvent = TypedEvent<
  [string],
  EnabledAccountEventObject
>;

export type EnabledAccountEventFilter = TypedEventFilter<EnabledAccountEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface CBDCAccessControl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CBDCAccessControlInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ACCESS_ROLE(overrides?: CallOverrides): Promise<[string]>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    FREEZER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MOVER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    authorizedAccounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    changeAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disableAccount(
      member: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enableAccount(
      member: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ACCESS_ROLE(overrides?: CallOverrides): Promise<string>;

  BURNER_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  FREEZER_ROLE(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  MOVER_ROLE(overrides?: CallOverrides): Promise<string>;

  PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  authority(overrides?: CallOverrides): Promise<string>;

  authorizedAccounts(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  changeAuthority(
    newAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disableAccount(
    member: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enableAccount(
    member: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyAccount(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ACCESS_ROLE(overrides?: CallOverrides): Promise<string>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    FREEZER_ROLE(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    MOVER_ROLE(overrides?: CallOverrides): Promise<string>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    authority(overrides?: CallOverrides): Promise<string>;

    authorizedAccounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    changeAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    disableAccount(
      member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    enableAccount(
      member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AuthorityChanged(address)"(
      newAuthority?: PromiseOrValue<string> | null
    ): AuthorityChangedEventFilter;
    AuthorityChanged(
      newAuthority?: PromiseOrValue<string> | null
    ): AuthorityChangedEventFilter;

    "DisabledAccount(address)"(
      member?: PromiseOrValue<string> | null
    ): DisabledAccountEventFilter;
    DisabledAccount(
      member?: PromiseOrValue<string> | null
    ): DisabledAccountEventFilter;

    "EnabledAccount(address)"(
      member?: PromiseOrValue<string> | null
    ): EnabledAccountEventFilter;
    EnabledAccount(
      member?: PromiseOrValue<string> | null
    ): EnabledAccountEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    ACCESS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    FREEZER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MOVER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    authorizedAccounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disableAccount(
      member: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enableAccount(
      member: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACCESS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FREEZER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MOVER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    authorizedAccounts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disableAccount(
      member: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enableAccount(
      member: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
