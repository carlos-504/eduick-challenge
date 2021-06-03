import React, { useState, useContext } from 'react';
import ModalLogin from '../ModalLogin';
import { ReactComponent as Logo } from '../../assets/images/landingPage/logo.svg';
import { ReactComponent as CloseButton } from '../../assets/images/landingPage/close-modal.svg';
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
          <Logo />
          <CloseButton onClick={openContext.handleClose} />
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
