import React, { useContext, useState } from 'react';
import viewPassIcon from '../../assets/images/landingPage/view-pass.svg';
import hiddenPassIcon from '../../assets/images/landingPage/hidden-pass.svg';
import closeButton from '../../assets/images/landingPage/close-modal.svg';
import {
  ModalLoginContainer,
  ModalLoginTop,
  ModalLoginContent,
  FormLogin,
  InputContainer,
  Button,
  ImgContainer,
} from './styles';
import { LoginContext } from '../../context';

function ModalLogin() {
  const loginContext = useContext(LoginContext);
  const [viewPass, setViewPass] = useState(false);

  return (
    <ModalLoginContainer
      onClose={loginContext.handleCloseLogin}
      aria-labelledby="customized-dialog-title"
      open={loginContext.openModal}
    >
      <ModalLoginTop>
        <div>
          <h1 className="title">Get Started</h1>
          <h2 className="subtitle">JUST LOGIN</h2>
        </div>
        <ImgContainer>
          <img
            src={closeButton}
            onClick={loginContext.handleCloseLogin}
            alt="close-button"
          />
        </ImgContainer>
      </ModalLoginTop>
      <ModalLoginContent>
        <FormLogin>
          <InputContainer>
            <label>Username:</label>
            <input type="text" />
          </InputContainer>
          <InputContainer>
            <label>Password:</label>
            <input type={viewPass ? 'text' : 'password'} />
            <img
              src={!viewPass ? viewPassIcon : hiddenPassIcon}
              alt="view-password"
              onClick={
                !viewPass ? () => setViewPass(true) : () => setViewPass(false)
              }
            />
          </InputContainer>
          <Button>LOGIN</Button>
        </FormLogin>
      </ModalLoginContent>
    </ModalLoginContainer>
  );
}

export default ModalLogin;
