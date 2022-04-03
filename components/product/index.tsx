import Styles from './style';
import Image from 'next/image'
import Link from 'next/link'
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';
import { ProductsProps } from './types';

export default function Product({ title, price, thumbnail, categories, children }: ProductsProps) {
  return (
    <Styles.Box>
        <Link href={`/`} passHref={true}>

          <div>
            <Image src={thumbnail} alt={title} width={150} height={150} />
            <Styles.Title>{ title }</Styles.Title>
            <Styles.Categories>
              {categories.map((cat, index) => (
                <span key={index}>{cat}</span>
              ))}
            </Styles.Categories>
            
            <Styles.Rate>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
              <MdStarOutline />
            </Styles.Rate>

            <Styles.Price>{price}</Styles.Price>
          </div>
        </Link>

        {children}

        <Styles.Button>Add to cart</Styles.Button>
      </Styles.Box>
  ) 
}
