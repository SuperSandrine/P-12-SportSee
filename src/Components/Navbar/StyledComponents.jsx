import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 19px 60px 14px 29px;
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
  width: 117px;
  height: calc(100vh - 85px);
  display: flex;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 0;
  li {
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
  }
`;
