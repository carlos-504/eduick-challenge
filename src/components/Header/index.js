import React, { useState } from 'react';

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
import ModalMenu from '../ModalMenu';
import ModalLogin from '../ModalLogin';
import logo from '../../assets/images/landingPage/logo.svg';
import menuToggle from '../../assets/images/landingPage/menu-hamburguer.svg';
import { MenuContext, LoginContext } from '../../context';

function Header() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenLogin = () => {
    setOpenModal(true);
  };

  const handleCloseLogin = () => {
    setOpenModal(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MenuContext.Provider value={{ open, handleClose }}>
      <LoginContext.Provider value={{ openModal, handleCloseLogin }}>
        <HeaderContainer>
          <HeaderWrap>
            <Navigation>
              <MenuToggle src={menuToggle} onClick={handleClickOpen} />
              <Logo src={logo} alt="logo Eduick" />
              <NavList>
                <NavItem>How it Works</NavItem>
                <NavItem>About Us</NavItem>
              </NavList>
            </Navigation>
            <Button onClick={handleOpenLogin}>Get Started</Button>
            <ModalMenu />
            <ModalLogin />
          </HeaderWrap>
        </HeaderContainer>
      </LoginContext.Provider>
    </MenuContext.Provider>
  );
}

export default Header;
