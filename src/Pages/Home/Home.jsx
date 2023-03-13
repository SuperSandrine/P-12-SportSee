import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

import { StyledDiv } from './StyledDiv';
import { StyledMain } from '../Dashboard/StyledMain';
/**
 * Display a home page
 * @return {JSX.Element}
 */
const Home = () => {
  return (
    <div>
      <Navbar />
      <StyledMain>
        <h1>Page d'accueil</h1>
        <p className="welcomeSentence">
          Choisir son utilisateur en version mockée ou en version fetch
        </p>
        <StyledDiv>
          <Link to="/profile/12"> User 12 </Link>
          <Link to="/profile/18"> User 18</Link>
          <Link to="/profilemocked/12"> User 12 mocked </Link>
          <Link to="/profilemocked/18"> User 18 mocked </Link>
        </StyledDiv>
      </StyledMain>
    </div>
  );
};

export default Home;
