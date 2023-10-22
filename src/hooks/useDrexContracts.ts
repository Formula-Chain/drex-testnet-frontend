import { useEffect, useRef, useState } from "react";
import { useSigner } from "wagmi";
import { ethers, ContractFactory } from "ethers";
import * as types from "../typechain-types";
import { DEPLOYED_CONTRACTS } from "../utils/constants";

export interface DrexContracts {
  AddressDiscovery: types.AddressDiscovery;
  RealDigital: types.RealDigital;
  STR: types.STR;
  SwapOneStep: types.SwapOneStep;
  SwapTwoSteps: types.SwapTwoSteps;
  RealTokenizado: types.RealTokenizado | undefined;
  RealDigitalDefaultAccount: types.RealDigitalDefaultAccount;
  RealDigitalEnableAccount: types.RealDigitalEnableAccount;
}

const getAddressDiscoveryContractName = (humanReadableName: string): string => {
  if (humanReadableName.startsWith("RealTokenizado@")) {
    const split = humanReadableName.split("@");
    return ethers.utils.keccak256(
      ethers.utils.solidityPack(
        ["string", "uint256"],
        ["RealTokenizado@", split[1]]
      )
    );
  }

  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(humanReadableName));
};

export const useDrexContracts = (cjnp8: string | undefined) => {
  const { data: signer } = useSigner();
  const [contracts, setContracts] = useState<DrexContracts>();
  const [isParticipant, setIsParticipant] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const prevCjnpRef = useRef<string | undefined>(cjnp8);
  const prevSignerRef = useRef<ethers.Signer | undefined>(signer);

  useEffect(() => {
    const loadContracts = async () => {
      let loadedContracts: DrexContracts | undefined = contracts;
      if (!loadedContracts) {
        // no contracts loaded previously
        const addressDiscovery: types.AddressDiscovery =
          types.AddressDiscovery__factory.connect(
            DEPLOYED_CONTRACTS.addressDiscovery.address,
            signer!
          );
        loadedContracts = {
          AddressDiscovery: addressDiscovery,
          RealDigital: types.RealDigital__factory.connect(
            await addressDiscovery.addressDiscovery(
              getAddressDiscoveryContractName("RealDigital")
            ),
            signer!
          ),
          STR: types.STR__factory.connect(
            await addressDiscovery.addressDiscovery(
              getAddressDiscoveryContractName("STR")
            ),
            signer!
          ),
          SwapOneStep: types.SwapOneStep__factory.connect(
            await addressDiscovery.addressDiscovery(
              getAddressDiscoveryContractName("SwapOneStep")
            ),
            signer!
          ),
          SwapTwoSteps: types.SwapTwoSteps__factory.connect(
            await addressDiscovery.addressDiscovery(
              getAddressDiscoveryContractName("SwapTwoSteps")
            ),
            signer!
          ),
          RealTokenizado: undefined,
          RealDigitalDefaultAccount:
            types.RealDigitalDefaultAccount__factory.connect(
              await addressDiscovery.addressDiscovery(
                getAddressDiscoveryContractName("RealDigitalDefaultAccount")
              ),
              signer!
            ),
          RealDigitalEnableAccount:
            types.RealDigitalEnableAccount__factory.connect(
              await addressDiscovery.addressDiscovery(
                getAddressDiscoveryContractName("RealDigitalEnableAccount")
              ),
              signer!
            ),
        };
      }

      const cjnpChanged = cjnp8 !== prevCjnpRef.current;
      const signerChanged = signer !== prevSignerRef.current;

      if (cjnpChanged) {
        // cjnp8 changed
        if (cjnp8) {
          // cjnp is defined
          loadedContracts.RealTokenizado =
            types.RealTokenizado__factory.connect(
              await loadedContracts.AddressDiscovery.addressDiscovery(
                getAddressDiscoveryContractName(`RealTokenizado@${cjnp8}`)
              ),
              signer!
            );
          const signerAddr = await signer!.getAddress();
          const participantAddr =
            await loadedContracts.RealDigitalDefaultAccount.defaultAccount(
              cjnp8
            );
          console.log(`defaultAccount(${cjnp8})`, participantAddr);
          setIsParticipant(participantAddr === signerAddr);
        } else {
          loadedContracts.RealTokenizado = undefined;
          setIsParticipant(false);
        }
      }

      if (signerChanged) {
        // signer changed
        // connect new signer to contracts
        loadedContracts.RealDigital = loadedContracts.RealDigital.connect(
          signer!
        );
        loadedContracts.STR = loadedContracts.STR.connect(signer!);
        loadedContracts.SwapOneStep = loadedContracts.SwapOneStep.connect(
          signer!
        );
        loadedContracts.SwapTwoSteps = loadedContracts.SwapTwoSteps.connect(
          signer!
        );
        loadedContracts.RealDigitalDefaultAccount =
          loadedContracts.RealDigitalDefaultAccount.connect(signer!);
        loadedContracts.RealDigitalEnableAccount =
          loadedContracts.RealDigitalEnableAccount.connect(signer!);
        if (loadedContracts.RealTokenizado) {
          loadedContracts.RealTokenizado =
            loadedContracts.RealTokenizado!.connect(signer!);
        }
      }

      setIsLoading(false);
    };

    setIsLoading(true);

    if (signer) {
      loadContracts();
    } else {
      setContracts(undefined);
      setIsParticipant(false);
      setIsLoading(false);
    }
  }, [signer, cjnp8]);

  return {
    contracts,
    isParticipant,
    isLoading,
  };
};
