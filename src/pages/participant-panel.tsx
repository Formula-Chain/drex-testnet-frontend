import { Grid, GridItem, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { APP_NAME } from "../utils/constants";
import { useDrexContracts } from "../hooks/useDrexContracts";
import { ParticipantPanel as ParticipantPanelComponent } from "../components/ParticipantPanel";
import { useSigner } from "wagmi";

const ParticipantPanel: NextPage = () => {
  const {data: signer} = useSigner();
  const [cjnp8, setCjnp8] = useState<string>("");
  const [cjnp8Input, setCjnp8Input] = useState<string>("");
  const [cjnpInputTimeout, setCjnpInputTimeout] = useState<
    NodeJS.Timeout | undefined
  >();
  const { contracts, isParticipant, isLoading } = useDrexContracts(cjnp8);

  return (
    <div className={styles.container}>
      <Head>
        <title>{APP_NAME} - Participant Panel</title>
        <meta name="description" content={`${APP_NAME} - Participant Panel`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        <GridItem colSpan={2}>
          <h2 className={styles.title}>Participant Panel</h2>
        </GridItem>
        <GridItem colSpan={1}>
          <h4>CJNP8</h4>
        </GridItem>
        <GridItem colSpan={1}>
          <Input
            placeholder="Enter your CJNP8"
            value={cjnp8Input}
            onChange={(event) => {
              setCjnp8Input(event.target.value);
              if (cjnpInputTimeout) {
                clearTimeout(cjnpInputTimeout);
                setCjnpInputTimeout(undefined);
              }
              setCjnpInputTimeout(
                setTimeout(() => {
                  setCjnp8(event.target.value);
                  setCjnpInputTimeout(undefined);
                }, 500)
              );
            }}
          />
        </GridItem>
      </Grid>

      {isLoading ? (
        <h2 className={styles.title}>Loading...</h2>
      ) : (
        <ParticipantPanelComponent
          isParticipant={isParticipant}
          contracts={contracts!}
        />
      )}
    </div>
  );
};

export default ParticipantPanel;
