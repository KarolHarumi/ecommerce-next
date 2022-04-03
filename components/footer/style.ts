import styled from 'styled-components';

const MainFooter = styled.footer`
  width: 100%;
  padding: 100px 2em;
  color: #f2def0;
  background: linear-gradient(0deg, rgba(76,13,78,1) 0%, rgba(88,20,77,1) 50%, rgba(105,28,79,1) 100%);
`;

const Container = styled.div`
  max-width: 1140px;
  display: flex;
	flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
  }

  li {
    padding: 10px 0;
  }
`;

export default {
  MainFooter,
  Container,
};
