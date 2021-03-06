import styled from 'styled-components';
import { Dialog, DialogContent } from '@material-ui/core';
import { Btn } from '../Button/styles';
import { white, strongPurple } from '../../GlobalStyle';

export const ModalContainer = styled(Dialog)`
  & .MuiPaper-root {
    color: ${white};
    background: ${strongPurple};
    width: 100%;
    height: 100%;
    margin: 0;
    max-height: unset;
  }
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px;

  & svg:first-child {
    width: 109px;
    height: 17px;
  }

  & svg:last-child {
    width: 15px;
    height: 20px;
  }
`;

export const ModalContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModelNavigation = styled.nav`
  display: flex;
  justify-content: center;
  height: 25%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & li {
    text-align: center;
    margin-bottom: 20px;
    font-size: 21px;
  }
`;

export const Button = styled(Btn)`
  width: 100%;
`;
