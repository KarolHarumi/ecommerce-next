import styled from 'styled-components';

const CartBox = styled.aside`
  width: 250px;
  background-color: #fff;
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 10;
  border: 1px solid #ececec;
  padding: 30px 20px 20px;
  font-size: 12px;
  box-shadow: 2px 5px 5px #ececec;
  overflow: auto;
  max-height: 300px;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0 0 20px;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #ececec;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 20px;

    & + li {
      padding-top: 20px;
    }
  }
`;

const Button = styled.a`
  display: block;
  text-align: center;
  background-color: #00aaf5;
  border-radius: 15px;
  color: #fff;
  padding: 10px 30px;
  font-size: 12px;
  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.span`
  font-size: 16px;
  color: #aeaeae;
  margin-left: 20px;
`;

export default {
  CartBox,
  Button,
  Icon
};
