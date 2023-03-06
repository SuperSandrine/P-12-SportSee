import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

import { StyledMain } from '../Dashboard/Dashboard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <StyledMain>
        <h1>Page d'accueil</h1>
        <p>Choisir entre la version mockée ou la version fetch</p>
        <Link to="/profile/12"> User 12 </Link>
        <Link to="/profile/18"> User 18</Link>
        <Link to="/profilemocked/12"> User 12 mocked </Link>
      </StyledMain>
    </div>
  );
};

export default Home;
