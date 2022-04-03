import { useEffect, useState } from 'react'
import Head from 'next/head'
import Styles from '../styles/Home'
import Header from './../components/header'
import Footer from './../components/footer'
import SearchField from './../components/searchField'
import ProductsList from './../components/productsList'
import { getProducts } from './../services/products';

export default function Home() {
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts()
      .then(items => {
        setProductsList(items)
      })
  }, []);

  const searchedProducts = productsList.filter(
    product => (product.title.toLowerCase().includes(search.toLowerCase()))
  );

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
        <SearchField onChange={(text) => setSearch(text.target.value)} />
        <ProductsList searchedProducts={searchedProducts} />
      </Styles.Main>

      <Footer />
    </>
  )
}
