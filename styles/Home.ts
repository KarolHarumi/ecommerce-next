import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  max-width: 1140px;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: flex-start;
  margin: 4rem auto;
`;

const MainTitle = styled.h1`
  margin: 0 0 40px;
  font-size: 31px;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

export default {
  Main,
  MainTitle,
  Grid,
};
