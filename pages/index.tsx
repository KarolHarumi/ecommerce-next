import { useEffect, useState } from 'react'
import Head from 'next/head'
import Styles from '../styles/Home'
import Header from './../components/header'
import Footer from './../components/footer'
import SearchField from './../components/searchField'
import Product from './../components/product'
import { getProducts } from './../services/products';

export default function Home() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts()
      .then(items => {
        setList(items)
      })
  }, []);

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

        <Styles.Grid>
          {list.map(item => (
            <Product 
              key={item.id} 
              title={item.title} 
              thumbnail={item.thumbnail}
              id={item.id}
              price={item.price} 
              categories={item.categories} 
            />
          ))}
        </Styles.Grid>
      </Styles.Main>

      <Footer />
    </>
  )
}
