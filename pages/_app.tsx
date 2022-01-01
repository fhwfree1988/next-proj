import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AllTogether from "./MyTest/LifeCycle/AllTogether";

function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return <AllTogether></AllTogether>
}

export default MyApp
