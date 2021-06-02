import styled from 'styled-components';
import { Dialog, DialogContent } from '@material-ui/core';
import { Btn } from '../Button/styles';
import {
  white,
  beige,
  fontDash,
  secondaryDetailColor,
  borderColor,
} from '../../GlobalStyle';

export const ModalLoginContainer = styled(Dialog)`
  & .MuiPaper-root {
    color: ${white};
    background: #6a40e4;
    width: 100%;
    height: 100%;
    margin: 0;
    max-height: unset;

    @media (min-width: 768px) {
      height: unset;
      width: 35%;
      padding: 25px;
      overflow-y: unset;
    }
  }
`;

export const ModalLoginTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px;

  & div {
    font-family: ${fontDash};
    line-height: 35px;
  }

  & .title {
    font-family: inherit;
    font-weight: 400;
    color: ${white};
    font-size: 25px;

    @media (min-width: 768px) {
      font-size: 35px;
    }
  }

  & .subtitle {
    font-family: inherit;
    color: ${beige};
    font-size: 30px;

    @media (min-width: 768px) {
      font-size: 35px;
    }
  }
`;

export const ImgContainer = styled.div`
  align-self: flex-start;

  @media (min-width: 768px) {
    width: 51px;
    height: 51px;
    background: #200e64;
    border-radius: 50%;
    padding: 20px;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 75px;
    left: 64px;
    cursor: pointer;
  }

  & img {
    width: 17px;
    height: 17px;
  }
`;

export const ModalLoginContent = styled(DialogContent)`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & input {
    margin-top: 10px;
    color: ${white};
    background: ${secondaryDetailColor};
    border: 1px solid ${borderColor};
    border-radius: 4px;
    height: 42px;
    padding-left: 10px;
  }

  & img {
    width: 24px;
    height: 24px;
    position: relative;
    bottom: 31px;
    align-self: flex-end;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const Button = styled(Btn)`
  width: 100%;
`;
