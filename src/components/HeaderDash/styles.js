import styled from 'styled-components';
import {
  white,
  primaryPurple,
  strongPurpleSec,
  yellow,
} from '../../GlobalStyle';

export const Header = styled.header`
  color: ${white};
  background: ${primaryPurple};

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 70%;
    padding-right: 0;
    padding-left: 0;
  }

  & nav {
    @media (min-width: 768px) {
      min-width: 12vw;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Navigation = styled.nav`
  & svg {
    width: 88px;
    height: 15px;
    cursor: pointer;
    margin-right: 40px;
  }
`;

export const ItemList = styled.li`
  cursor: pointer;
  display: none;

  &:hover {
    color: #e3e2e2;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const GroupActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70px;

  @media (min-width: 768px) {
    width: unset;
  }
`;

export const ChangeRole = styled.div`
  display: none;

  @media (min-width: 768px) {
    margin: 0 20px;
    display: block;
    font-weight: 700;
    padding: 10px 20px;
    background: ${strongPurpleSec};
    border-radius: 5px;
    font-size: 11px;
  }
`;

export const ActionRole = styled.div`
  & svg {
    width: 14px;
    height: 9px;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const ContainerProfile = styled.div`
  & .teste {
    width: 34px;
    height: 34px;

    @media (min-width: 768px) {
      align-self: flex-start;
    }
  }
`;

export const Notification = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${yellow};
  position: relative;
  top: 6px;
  left: 22px;
`;
