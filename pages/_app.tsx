import '@/styles/globals.css'
import { TSParticles } from '@/components'
// * Type imports
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TSParticles />
      <Component {...pageProps} />
    </>
  )
}
