import styled from 'styled-components';

const MainHeader = styled.header`
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0 10px;
`;

const AlignSection = styled.div`
  display: flex;
	align-items: center;
`;

const MenuHeader = styled.menu`
  font-size: 11px;
  color: #aeaeae;
  padding: 0;
  margin-left: 20px;

  a {
    color: #000;
    font-size: 12px;
    margin: 0 15px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FreeShipping = styled.span`
  font-size: 11px;
  color: #aeaeae;

  a {
    color: orange;
  }
`;

const Icon = styled.span`
  font-size: 16px;
  color: #aeaeae;
  margin-left: 20px;
  position: relative;
`;

const ContainerBoxCart = styled.aside`
  position: relative;
`;

const CartItem = styled.span`
  position: absolute;
  top: -7px;
  right: -15px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  font-size: 8px;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
`;

export default {
  MainHeader,
  AlignSection,
  MenuHeader,
  FreeShipping,
  Icon,
  ContainerBoxCart,
  CartItem
};
