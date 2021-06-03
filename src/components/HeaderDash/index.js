import React from 'react';

import {
  Header,
  HeaderContainer,
  GroupActions,
  Navigation,
  ContainerProfile,
  Notification,
  ItemList,
  ChangeRole,
  ActionRole,
} from './styles';
import { ReactComponent as Logo } from '../../assets/images/landingPage/logo.svg';
import { ReactComponent as DownIcon } from '../../assets/images/dashboard/icon-down.svg';
import { ReactComponent as ProfileIcon } from '../../assets/images/dashboard/icon-profile.svg';

function HeaderDash() {
  return (
    <Header>
      <HeaderContainer>
        <Navigation>
          <Logo />
          <ul>
            <ItemList>My Classes</ItemList>
          </ul>
        </Navigation>
        <GroupActions>
          <ChangeRole>CHANGE TO TEACHER MODE</ChangeRole>
          <ActionRole>
            <DownIcon />
          </ActionRole>
          <ContainerProfile>
            <Notification></Notification>
            <ProfileIcon className="teste" />
          </ContainerProfile>
        </GroupActions>
      </HeaderContainer>
    </Header>
  );
}

export default HeaderDash;
