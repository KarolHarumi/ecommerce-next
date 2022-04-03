import { createContext } from 'react';

const state = {
  products: [], 
  setProduct: null
}

export const AppContext = createContext(state);