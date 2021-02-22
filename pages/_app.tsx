import * as React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default App
