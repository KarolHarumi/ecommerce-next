import styled from 'styled-components';

const Main = styled.main`
  max-width: 1140px;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: flex-start;
  margin: 4rem auto;
`;

const PhotoProduct = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #ececec;
  padding: 80px;
  margin-right: 50px;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Detail = styled.div`
  width: 350px;

  .quantity {
    margin-left: 5px;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin: 0 0 30px;
  font-size: 31px;
  position: relative;

  &:after { 
    content: '';
    width: 10%;
    height: 6px;
    background-color: #000;
    position: absolute;
    left: 0;
    bottom: -10px;
  }
`;

const SmallText = styled.span`
  display: block;
  font-size: 14px;
  font-weight: normal;
  color: #6f6f6f;
  margin: 5px 0 10px;

  span + span:before {
    content: ' | ';
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: #6f6f6f;
  margin: 5px 0 0;
`;

const Rate = styled.div`
  font-size: 18px;
  color: #f29e6f;
  margin: 15px 0;
`;

const QtyContainer = styled.div`
  display: block;
  font-size: 18px;
  color: #6f6f6f;
  margin: 20px 0;
`;

const Price = styled.span`
  display: block;
  font-size: 18px;
  color: #6f6f6f;
  margin: 20px 0;
`;

const Button = styled.span`
  display: block;
  text-align: center;
  background-color: #00aaf5;
  border-radius: 15px;
  color: #fff;
  padding: 10px 30px;
  font-size: 12px;
  margin-top: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export default {
  Main,
  PhotoProduct,
  Detail,
  Title,
  Description,
  SmallText,
  Rate,
  QtyContainer,
  Price,
  Button,
};
