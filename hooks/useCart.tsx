import { useContext, useEffect } from 'react';
import { AppContext } from '../context';

interface HooksReturn {
  addProduct(id: string, title: string, price: string, qty: number): void;
  products: Array<any>;
}

export const useCart = (): HooksReturn => {
  const { products, setProduct } = useContext(AppContext);

  const checkCartStorage = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  const addProduct = (id, title, price, qty) => {
    const item = {
      "id": id,
      "title": title,
      "price": price,
      "qty": qty
    }

    if (typeof window !== 'undefined') {
      checkCartStorage();

      let parsedProductsCart = JSON.parse(localStorage.getItem("cart"));

      const found = parsedProductsCart.some(item => item.id === id);
      
      if (!found) {
        parsedProductsCart = [...parsedProductsCart, item]
        localStorage.setItem("cart", JSON.stringify(parsedProductsCart));
        setProduct(parsedProductsCart);
      };
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkCartStorage();

      let parsedProductsCart = JSON.parse(localStorage.getItem("cart"));
      parsedProductsCart = [...parsedProductsCart]
      localStorage.setItem("cart", JSON.stringify(parsedProductsCart));
      setProduct(parsedProductsCart);
    }
  }, [setProduct]);
  

  return { addProduct, products };
};
