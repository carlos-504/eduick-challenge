import React, { useState, useContext } from 'react';
import ModalLogin from '../ModalLogin';
import logo from '../../assets/images/landingPage/logo.svg';
import closeButton from '../../assets/images/landingPage/close-modal.svg';
import {
  ModalContainer,
  ModalTop,
  ModalContent,
  ModelNavigation,
  NavList,
  Button,
} from './styles';
import { MenuContext, LoginContext } from '../../context';

function ModalMenu() {
  const openContext = useContext(MenuContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenLogin = () => {
    setOpenModal(true);
  };

  const handleCloseLogin = () => {
    setOpenModal(false);
  };

  return (
    <LoginContext.Provider value={{ openModal, handleCloseLogin }}>
      <ModalContainer
        onClose={openContext.handleClose}
        aria-labelledby="customized-dialog-title"
        open={openContext.open}
      >
        <ModalTop>
          <img src={logo} alt="logo" />
          <img
            src={closeButton}
            onClick={openContext.handleClose}
            alt="close-button"
          />
        </ModalTop>
        <ModalContent>
          <ModelNavigation>
            <NavList>
              <li>How it works</li>
              <li>About Us</li>
            </NavList>
          </ModelNavigation>
          <Button onClick={handleOpenLogin}>Get Started</Button>
          <ModalLogin />
        </ModalContent>
      </ModalContainer>
    </LoginContext.Provider>
  );
}

export default ModalMenu;
