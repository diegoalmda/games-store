import React from 'react';
import { NavBar, GamesCatalog, CartContainer } from '../../Imports';
import { MainContainer } from './styled';

const Home = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <GamesCatalog />
        <CartContainer />
      </MainContainer>
    </>
  )
}

export default Home;