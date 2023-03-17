import React from 'react';

import { ButtonVerticalNavBar } from './ButtonVerticalNav';
import {
  StyledNav,
  StyledVerticalUl,
  StyledLink,
} from './StyledComponentsNavBar';

import logo from './../../assets/sportsee-logo.svg';
import yogi from './../../assets/Groupyogi.svg';
import ride from './../../assets/Vectorride.svg';
import swim from './../../assets/Vectorswim.svg';
import work from './../../assets/Vectorwork.svg';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/**
 * Component creates vertical and horizontal Navbar.
 * @returns {JSX.Element}
 */
const Navbar = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const profilLink = pathname.startsWith('/profilemocked')
    ? `/profilemocked/${id}`
    : `/profile/${id}`;
  return (
    <header>
      <StyledNav>
        <StyledLink to="/">
          <img src={logo} alt="logo de sportsee" />
        </StyledLink>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to={profilLink}>Profil</StyledLink>
        <StyledLink to="/workinprogress">Réglages</StyledLink>
        <StyledLink to="/workinprogress">Communauté</StyledLink>
      </StyledNav>
      <StyledVerticalUl>
        <li>
          <ul>
            <ButtonVerticalNavBar picture={yogi} alt="yoga" />
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
              fontSize: '1.17vh',
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
