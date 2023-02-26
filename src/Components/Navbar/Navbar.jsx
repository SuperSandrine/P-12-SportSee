import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './../../assets/sportsee-logo.svg';

const StyledNav = styled.nav`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 19px 60px 14px 29px;
  width: 100%;
  position: relative;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: black;
  font-size: 24px;
`;
const StyledVerticalUl = styled.ul`
  width: 117px;
  height: calc(100vh - 99px);
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 0;
`;

const Navbar = () => {
  return (
    <header>
      <StyledNav>
        <StyledLink to="/">
          <img src={logo} alt="logo de sportsee" />
        </StyledLink>
        <StyledLink to="/dashboard">Accueil</StyledLink>
        <StyledLink to="/workinprogress">Profil</StyledLink>
        <StyledLink to="/workinprogress">Réglages</StyledLink>
        <StyledLink to="/workinprogress">Communauté</StyledLink>
      </StyledNav>
      <StyledVerticalUl>
        <li>
          <button>Yogi</button>
        </li>
        <li>
          <button>Swim</button>
        </li>
        <li>
          <button>Ride</button>
        </li>
        <li>
          <button>Work</button>
        </li>
        <li>
          <p
            style={{
              color: 'white',
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
              width: 'fit-content',
            }}
          >
            Copyright, SportSee 2020
          </p>
        </li>
      </StyledVerticalUl>
    </header>
  );
};

export default Navbar;