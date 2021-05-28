import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import landImg from '../../assets/images/landingPage/land.png';
import checkedIcon from '../../assets/images/landingPage/checked.svg';
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
  PrimaryDetail,
  SecondyDetail,
  DetailsCircle,
  PrimaryDetailRight,
  SecondyDetailRight,
} from './styles';

function Home() {
  return (
    <Body>
      <Header />
      <Container>
        <ContainerWrap>
          <div>
            <LandImg src={landImg} alt="image-home" />
            <PrimaryDetail></PrimaryDetail>
            <SecondyDetail></SecondyDetail>
            <DetailsCircle></DetailsCircle>
          </div>
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
                <input
                  type="radio"
                  id="android"
                  name="skills"
                  value="Android Development"
                />
                <label for="android">
                  <img src={checkedIcon} />
                  I'M A STUDENT
                </label>
              </RoleBox>
              <RoleBox>
                <InputRadio type="radio" />
                <label>I'M A STUDENT</label>
              </RoleBox>
              <Button label="SEARCH" />
            </GroupActions>
          </ContentPage>
        </ContainerWrap>
        <div>
          <PrimaryDetailRight></PrimaryDetailRight>
          <SecondyDetailRight></SecondyDetailRight>
        </div>
      </Container>
    </Body>
  );
}

export default Home;
