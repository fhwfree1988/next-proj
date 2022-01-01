import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AllTogether from "./MyTest/LifeCycle/AllTogether";
import UE from "./MyTest/LifeCycle/UE";

function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <div>
      <UE/>
      <AllTogether/>
    </div>

  )

}

export default MyApp
