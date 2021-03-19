import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Spacer, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'

const Navbar: React.FC = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)
  return (
    <Box as="nav" position="fixed" width="100%" height="70px" p="5px 10px" maxWidth="100vw">
      <Flex>
        <Link href="/">
          <Image src="/images/itsme-round-200.png" width="50px" height="50px" />
        </Link>
        <Spacer />
        <Button onClick={toggleMode}>
          <ToggleIcon />
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar
