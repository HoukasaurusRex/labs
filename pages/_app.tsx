import * as React from 'react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { Chakra } from '../lib/chakra'

const App = ({ Component, pageProps: { cookies } }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Next SEO"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt'
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second'
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' }
          ],
          site_name: 'SiteName'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <Chakra cookies={cookies}>
        <Component />
      </Chakra>
    </>
  )
}

export default App
export { getServerSideProps } from '../lib/chakra'
