import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const Logo = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 56%;
  color: white;
  height: auto;
  font-size: 14px;
`;

export const NavItem = styled.li`
  cursor: pointer;
  height: 100%;
  width: auto;

  &:hover {
    color: #e3e2e2;
  }
`;
