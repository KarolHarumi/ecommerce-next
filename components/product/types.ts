export type ProductsProps = {
  id: string;
  title: string;
  price: string;
  thumbnail: string;
  sale_price?: string;
  in_stock?: string;
  images?: Array<string>;
  categories?: Array<string>;
  color?: string;
  sizes?: Array<string>;
  children?: any;
};
