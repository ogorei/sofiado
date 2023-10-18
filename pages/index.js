import React from 'react'
import { Box } from '@mantine/core'
import Top from '../components/Top'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
    <Head>
      <title>SOFIA°</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Top />
  </div>
  )
}

export default Home
