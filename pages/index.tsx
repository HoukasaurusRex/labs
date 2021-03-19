import * as React from 'react'
import Head from 'next/head'
import { Box, Heading, Text, Image, useColorModeValue, Link } from '@chakra-ui/react'
import Layout, { siteTitle, siteDescription } from '../components/layout'

export default function Home(): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box as="section">
        <Box
          as="header"
          minHeight="100vh"
          d="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade()#browser_compatibility */}
          {/* <Box
            maxWidth="200px"
            width="200px"
            borderRadius="50%"
            transition="all 0.1s ease"
            bgImage={`-webkit-cross-fade( url(/images/the-labs-logo.png) ${useColorModeValue(
              '100%',
              '0%'
            )}, url(/images/the-labs-logo-inverted.png) ${useColorModeValue('0%', '100%')})`}
          /> */}
          <Box w="200px" h="200px" position="relative" borderRadius="50%" overflow="hidden">
            <Image
              src="/images/the-labs-logo.png"
              transition="all 0.15s ease"
              position="absolute"
              filter={`opacity(${useColorModeValue(1, 0)})`}
            />
            <Image
              src="/images/the-labs-logo-inverted.png"
              transition="all 0.15s ease"
              position="absolute"
              filter={`opacity(${useColorModeValue(0, 1)})`}
            />
          </Box>
          <Heading as="h1">{siteTitle}</Heading>
          <Text paddingTop="1rem">{siteDescription}</Text>
          <Text paddingTop="0.5rem" color="gray.500">
            Coming soon! Stay tuned at{' '}
            <Link isExternal href="https://jt.houk.space">
              jt.houk.space
            </Link>{' '}
            for updates
          </Text>
        </Box>
      </Box>
    </Layout>
  )
}
