import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from 'modules/store'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Link href="/"><a>Home</a></Link>
    <Component {...pageProps} />
  </>
  )
}

export default wrapper.withRedux(MyApp) 
