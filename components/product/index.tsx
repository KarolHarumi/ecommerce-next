import Styles from './style';
import Image from 'next/image'
import Link from 'next/link'
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

export default function Product() {
  return (
    <Styles.Box>
        <Link href={`/`} passHref={true}>

          <div>
            <Image src='/product_mock.jpeg' alt={''} width={150} height={150} />
            <Styles.Title>Title</Styles.Title>
            <Styles.SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Styles.SubTitle>
            
            <Styles.Rate>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
              <MdStarOutline />
            </Styles.Rate>

            <Styles.Price>$1.99 CAD</Styles.Price>
          </div>
        </Link>

        <Styles.Button>Add to cart</Styles.Button>
      </Styles.Box>
  ) 
}
