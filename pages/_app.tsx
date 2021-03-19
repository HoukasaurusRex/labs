import * as React from 'react'
import { AppProps } from 'next/app'
import { Chakra } from '../lib/chakra'

const App = ({ Component, pageProps: { cookies } }: AppProps): JSX.Element => {
  return (
    <Chakra cookies={cookies}>
      <Component />
    </Chakra>
  )
}

export default App
export { getServerSideProps } from '../lib/chakra'
