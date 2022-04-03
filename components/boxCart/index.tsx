import Styles from './style';
import { MdClose } from 'react-icons/md';
import { BoxCartProps } from './types';

export default function BoxCart({ onClick }: BoxCartProps) {
  return (
    <Styles.CartBox>
      <Styles.Icon className="close" onClick={onClick}>
        <MdClose />
      </Styles.Icon>

      <ul>
          <li>
            <strong>title</strong>
            <span>price</span>
            <span>Qty: 1</span>
          </li>
      </ul>
      
      <Styles.Button href="#">Go to checkout</Styles.Button>
    </Styles.CartBox>
  ) 
}
