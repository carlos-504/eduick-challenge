import styled from 'styled-components';
import { white } from '../../GlobalStyle';
import { Btn } from '../Button/styles';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const MenuToggle = styled.img`
  display: none;

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    cursor: pointer;
    display: block;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 40px;

  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 56%;
  color: ${white};
  height: auto;
  font-size: 14px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  height: 100%;
  width: auto;

  &:hover {
    color: #e3e2e2;
  }
`;

export const Button = styled(Btn)`
  @media (max-width: 767px) {
    display: none;
  }
`;
