import React from 'react';

import {
  HeaderContainer,
  HeaderWrap,
  Navigation,
  MenuToggle,
  Logo,
  NavList,
  NavItem,
  Button,
} from './styles';
import logo from '../../assets/images/landingPage/logo.svg';
import menuToggle from '../../assets/images/landingPage/menu-hamburguer.svg';

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <Navigation>
            <MenuToggle src={menuToggle} />
            <Logo src={logo} alt="logo Eduick" />
            <NavList>
              <NavItem>How it Works</NavItem>
              <NavItem>About Us</NavItem>
            </NavList>
          </Navigation>
          <Button>Get Started</Button>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
}

export default Header;
