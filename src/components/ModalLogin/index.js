import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ViewPassIcon } from '../../assets/images/landingPage/view-pass.svg';
import { ReactComponent as HiddenPassIcon } from '../../assets/images/landingPage/hidden-pass.svg';
import { ReactComponent as CloseButton } from '../../assets/images/landingPage/close-modal.svg';

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
  const history = useHistory();

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
          <CloseButton
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
            {!viewPass ? (
              <ViewPassIcon onClick={() => setViewPass(true)} />
            ) : (
              <HiddenPassIcon onClick={() => setViewPass(false)} />
            )}
          </InputContainer>
          <Button onClick={() => history.push('/dashboard')}>LOGIN</Button>
        </FormLogin>
      </ModalLoginContent>
    </ModalLoginContainer>
  );
}

export default ModalLogin;
