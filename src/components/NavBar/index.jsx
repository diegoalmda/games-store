import React from 'react';
import { MenuContainer, Logo, Select, Image, SortContainer } from './styled';
import CartCount from '../CartCount';

const NavBar = () => {
  return (
    <MenuContainer>
      <Logo>        
        Games<br />Store
      </Logo>      
      <CartCount />
    </MenuContainer>
  );
}

export default NavBar;