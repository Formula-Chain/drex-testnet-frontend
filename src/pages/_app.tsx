import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { drex } from "../utils/drex-chain";

import { APP_NAME } from '../utils/constants';

import {
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
import { Page } from '../components/Page'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {

  //This is currently using the public alchemy ID. Please add your own to avoid being rate limited
  //Docs can be found here: https://wagmi.sh/docs/providers/alchemy
  const { chains, provider } = configureChains(
    [drex],
    [
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: APP_NAME,
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ChakraProvider>
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
