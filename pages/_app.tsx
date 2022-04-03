import '../styles/globals.css'
import { AppContext } from '../context';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [products, setProduct] = useState([]);

  return (
    <AppContext.Provider value={{ products, setProduct }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
