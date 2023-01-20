import '@/styles/globals.css'
import { TSParticles } from '@/components'
import { Provider } from 'react-redux'
import store from 'context/store'

// * Type imports
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <TSParticles />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
