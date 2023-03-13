import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  background-color: black;
  justify-content: space-between;
  padding: 0 4.4vw 0 1.5vw;
  align-items: center;
  height: 8.89vh;
  width: 100%;
  position: relative;
`;
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: black;
  font-size: 24px;
`;
export const StyledVerticalUl = styled.ul`
  width: 8.13vw;
  height: 100vh;
  display: flex;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 0;
  li {
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
  }
`;
