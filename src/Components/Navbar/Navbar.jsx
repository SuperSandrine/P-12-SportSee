import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './../../assets/sportsee-logo.svg';
import yogi from './../../assets/Groupyogi.svg';
import ride from './../../assets/Vectorride.svg';
import swim from './../../assets/Vectorswim.svg';
import work from './../../assets/Vectorwork.svg';

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
  height: calc(100vh - 90px);
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

const ButtonVerticalNavBar = (props) => {
  return (
    <li>
      <button
        style={{
          width: '64px',
          height: '64px',
          background: 'white',
          borderRadius: '6px',
        }}
      >
        <img src={props.picture} />
      </button>
    </li>
  );
};

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
          <ul>
            <ButtonVerticalNavBar picture={yogi} alt="yoga " />
            <ButtonVerticalNavBar picture={swim} alt="natation" />
            <ButtonVerticalNavBar picture={ride} alt="vélo" />
            <ButtonVerticalNavBar picture={work} alt="workout" />
          </ul>
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
