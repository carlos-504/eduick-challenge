import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import landImg from '../../assets/images/landingPage/land.png';
import {
  Body,
  Container,
  ContainerWrap,
  LandImg,
  ContentPage,
  Typography,
  Title,
  SubTitle,
  TextHome,
  InputSearch,
  GroupActions,
  RoleBox,
  InputRadio,
} from './styles';

function Home() {
  return (
    <Body>
      <Header />
      <Container>
        <ContainerWrap>
          <LandImg src={landImg} alt="image-home" />
          <ContentPage>
            <Typography>
              <Title>Find your</Title>
              <SubTitle>BEST TEACHER</SubTitle>
            </Typography>
            <TextHome>
              Whether you are a student trying to find your ideal private
              language teachers/tutors or a teacher trying to find great
              students for your customised private lessons!
            </TextHome>
            <InputSearch placeholder="Type here what are you looking for" />
            <GroupActions>
              <RoleBox>
                <span></span>
                <InputRadio type="radio" />
                <label>I'M A TEACHER</label>
              </RoleBox>
              <RoleBox>
                <InputRadio type="radio" />
                <label>I'M A TEACHER</label>
              </RoleBox>
              <Button label="SEARCH" />
            </GroupActions>
          </ContentPage>
        </ContainerWrap>
      </Container>
    </Body>
  );
}

export default Home;
