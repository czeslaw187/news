import Layout from "../components/Layout"
import '../styles/globals.css'
import { wrapper } from "../lib/store"

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default wrapper.withRedux(MyApp)