import * as React from 'react'
import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import theme from './theme'

export const Chakra = ({
  cookies,
  children
}: {
  cookies?: string
  children: JSX.Element
}): JSX.Element => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

// also export a reusable function getServerSideProps
export const getServerSideProps = ({ req }) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? ''
    }
  }
}
