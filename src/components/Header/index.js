import React from 'react';

import {
  HeaderContainer,
  HeaderWrap,
  Navigation,
  Logo,
  NavList,
  NavItem,
} from './styles';
import logo from '../../assets/images/logo.svg';
import Button from '../Button';

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <Navigation>
            <Logo src={logo} alt="logo Eduick" />
            <NavList>
              <NavItem>How it Works</NavItem>
              <NavItem>About Us</NavItem>
            </NavList>
          </Navigation>
          <Button label="Get Started" />
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
}

export default Header;
