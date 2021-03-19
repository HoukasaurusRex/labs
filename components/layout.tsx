import React from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'

export const siteTitle = 'The Lab'
export const siteDescription = 'Projects, Prototypes, and Experiments in Web Development'

const Layout = ({ children, home }: { children: React.ReactNode; home?: boolean }): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box as="main">{children}</Box>
    </>
  )
}

export default Layout
