import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AllTogether from "./MyTest/LifeCycle/AllTogether";
import UE from "./MyTest/LifeCycle/UE";
import ComponentdidUBP from "./MyTest/LifeCycle/didUpdateByAProp";

function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <div>
      <UE/>
      <AllTogether/>
        <ComponentdidUBP foo={2}></ComponentdidUBP>
    </div>

  )

}

export default MyApp
