import Head from 'next/head'
import Styles from '../styles/Home'
import Header from './../components/header'
import Footer from './../components/footer'
import Product from './../components/product'

export default function Home() {
  return (
    <>
      <Head>
        <title>JBL E-Commerce</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Styles.Main>
        <Styles.MainTitle>Products</Styles.MainTitle>

        <Styles.Grid>
          <Product />
          <Product />
          </Styles.Grid>
      </Styles.Main>

      <Footer />
    </>
  )
}
