import * as React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Layout, { siteTitle } from '../components/layout'

export default function Home(): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box>Hello</Box>
    </Layout>
  )
}
