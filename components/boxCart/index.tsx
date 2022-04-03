import Styles from './style';
import { MdClose } from 'react-icons/md';
import { useCart } from '../../hooks/useCart'
import { BoxCartProps } from './types';

export default function BoxCart({ onClick }: BoxCartProps) {
  const { products } = useCart();

  return (
    <Styles.CartBox>
      <Styles.Icon className="close" onClick={onClick}>
        <MdClose />
      </Styles.Icon>

      <ul>
        {products.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <span>$ {item.price} CAD</span>
            <span>Qty: {item.qty}</span>
          </li>
        ))
        }              
      </ul>
      
      <Styles.Button href="#">Go to checkout</Styles.Button>
    </Styles.CartBox>
  ) 
}
