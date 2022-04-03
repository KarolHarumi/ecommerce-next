import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getProduct } from './../../services/products';
import { ProductsDetailsProps } from './types';
import Styles from './../../styles/ProductsDetails';
import Header from './../../components/header'
import Footer from './../../components/footer'
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

export default function ProductDetail() {
  const [product, setProduct] = useState({ title: '', price: '', thumbnail: '', categories: [], description: '', color: '', sizes: []});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getProduct(id)
      .then(item => {
        setProduct(item)
      })
  }, [id]);

  const { title, price, thumbnail, categories, color, sizes }: ProductsDetailsProps = product;

  return (
    <div>
      <Header />

      <Styles.Main>
        <Styles.PhotoProduct>
          {thumbnail
          ? <Image src={thumbnail} alt={title} width={350} height={350} />
          : <Image src={'/loader.gif'} alt={title} width={50} height={50} />
          }
        </Styles.PhotoProduct>

        <Styles.Detail>
          <Styles.Title>{title}</Styles.Title>
          <Styles.SmallText>
            {categories.map((cat, index) => (
              <span key={index}>{cat}</span>
            ))}
          </Styles.SmallText>

          <Styles.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id sapien nisl. Praesent et finibus metus. Integer ipsum quam, feugiat ut venenatis vitae, malesuada ut eros. Nunc scelerisque dui id aliquam euismod. Morbi diam lorem, pulvinar eget urna ut, feugiat luctus massa. Sed ex mi, lacinia eget lobortis ut, finibus nec neque.</Styles.Description>
          
          <Styles.Rate>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
          </Styles.Rate>

          <Styles.SmallText>Color: {color}</Styles.SmallText>
          <Styles.SmallText>Sizes:&nbsp;  
            {sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </Styles.SmallText>

          <Styles.QtyContainer>
            <label htmlFor="quantity">Quantity: 
              <input id="quantity" className='quantity' type="number" defaultValue="1" />
            </label>
          </Styles.QtyContainer>

          <Styles.Price>{price}</Styles.Price>

          <Styles.Button onClick={() => console.log()}>
            Add to cart
          </Styles.Button>
        </Styles.Detail>
      </Styles.Main>

      <Footer />
    </div>
  ) 
}
