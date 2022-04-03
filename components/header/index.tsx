import Styles from './style';
import Image from 'next/image'
import Link from 'next/link'
import { MdSearch, MdPermIdentity, MdShoppingCart } from 'react-icons/md';
import BoxCart from '../boxCart';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart'

export default function Header() {
  const [visible, setVisible] = useState(false);
  const {total} = useCart();

  const showCart = () => {
    setVisible(true)
  }

  return (
    <Styles.MainHeader>
      <Styles.AlignSection>

        <Link href={'/'} passHref={true}>
            <div><Image src="/logo.png" alt="JBL Logo" width={50} height={50} /></div>
        </Link>
        
        <Styles.MenuHeader>
          <a href='#'>Wireless</a>
          <a href='#'>Headphones</a>
          <a href='#'>Home Audio</a>
          <a href='#'>Car & Machine</a>
          <a href='#'>Collections</a>
          <a href='#'>Sale</a>
        </Styles.MenuHeader>
      </Styles.AlignSection>

      <Styles.AlignSection>
        <Styles.FreeShipping>
          Free Ground Shipping & Returns <a href='#'>Learn More</a>
        </Styles.FreeShipping>
    
        <Styles.Icon><MdSearch /></Styles.Icon>
        <Styles.Icon><MdPermIdentity /></Styles.Icon>

        <Styles.ContainerBoxCart>
          <Styles.Icon onClick={showCart}>
            <MdShoppingCart />
            { total > 0 && 
              <Styles.CartItem>{ total }</Styles.CartItem>
            } 
          </Styles.Icon>          

          {visible && 
            <BoxCart onClick={() => setVisible(false)} />
          }
        </Styles.ContainerBoxCart>

      </Styles.AlignSection>
      
    </Styles.MainHeader>
  ) 
}
