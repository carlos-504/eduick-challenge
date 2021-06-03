import React from 'react';

import Header from '../../components/Header';
import landImg from '../../assets/images/landingPage/land.png';
import {
  Body,
  Container,
  ContainerWrap,
  LandImg,
  ContentPage,
  Typography,
  TextHome,
  InputContainer,
  GroupActions,
  RoleBox,
  InputRadio,
  Button,
  PrimaryDetail,
  SecondyDetail,
  DetailsCircle,
  DetailsRight,
  PrimaryDetailRight,
  SecondyDetailRight,
} from './styles';

function Home() {
  return (
    <Body>
      <Header />
      <Container>
        <ContainerWrap>
          <div className="details-container">
            <div>
              <LandImg src={landImg} alt="image-home" />
              <PrimaryDetail></PrimaryDetail>
              <SecondyDetail></SecondyDetail>
              <DetailsCircle></DetailsCircle>
            </div>
          </div>
          <ContentPage>
            <Typography>
              <h1 className="title">Find your</h1>
              <h2 className="subtitle">BEST TEACHER</h2>
            </Typography>
            <TextHome>
              Whether you are a student trying to find your ideal private
              language teachers/tutors or a teacher trying to find great
              students for your customised private lessons!
            </TextHome>
            <InputContainer>
              <input
                className="input-search"
                placeholder="Type here what are you looking for"
              />
            </InputContainer>
            <GroupActions>
              <div className="group-role">
                <RoleBox>
                  <InputRadio type="radio" />
                  <label>I'M A TEACHER</label>
                </RoleBox>
                <RoleBox>
                  <InputRadio type="radio" />
                  <label>I'M A STUDENT</label>
                </RoleBox>
              </div>
              <Button>SEARCH</Button>
            </GroupActions>
          </ContentPage>
        </ContainerWrap>
        <div>
          <DetailsRight>
            <PrimaryDetailRight></PrimaryDetailRight>
            <SecondyDetailRight></SecondyDetailRight>
          </DetailsRight>
        </div>
      </Container>
    </Body>
  );
}

export default Home;
