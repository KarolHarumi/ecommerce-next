import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid #ececec;
  padding: 40px;
  border-radius: 5px;
  display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: space-between;
  margin: 0 10px 20px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 16px;
  margin: 15px 0 0;
  width: 180px;
`;

const SubTitle = styled.h3`
  font-size: 11px;
  font-weight: normal;
  color: #6f6f6f;
  margin: 5px 0 0;
  max-width: 200px;
`;

const Rate = styled.div`
  font-size: 12px;
  color: #f29e6f;
  margin-top: 15px;
`;

const Price = styled.span`
  display: block;
  font-size: 18px;
  color: #6f6f6f;
  margin: 20px 0;
`;

const Button = styled.span`
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
  Box,
  Title,
  SubTitle,
  Button,
  Rate,
  Price,
};
