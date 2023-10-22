import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { APP_NAME } from '../utils/constants'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome
        </h2>

        <div className={styles.grid}>
        </div>
      </main>
    </div>
  )
}

export default Home
