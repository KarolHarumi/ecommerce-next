import React from 'react';
import Product from './../product'
import Styles from './style'

export default function ProductsList({ searchedProducts }) {
  return (
    <Styles.Grid>
      {searchedProducts.map(item => (
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
  );
}