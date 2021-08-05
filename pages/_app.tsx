import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import "../style/rockect.css";
import "../style/line.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
