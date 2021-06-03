import styled from 'styled-components';
import {
  white,
  fontDash,
  circleDetailColor,
  circleDetailColorSec,
  grey,
  black,
  strongPurple,
} from '../../GlobalStyle';

const Details = styled.div`
  border-radius: 0 50% 50% 50%;
  position: relative;
`;

export const Body = styled.main`
  background: ${grey};
  min-height: 100vh;
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const WelcomeSection = styled.section`
  border-radius: 8px;
  background: ${white};
  padding: 50px 15px 0 15px;
  margin-top: 40px;
  width: 100%;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    display: flex;
    padding: 50px 80px 30px 0px;

    & .text-container {
      position: relative;
      right: 60px;
      flex-grow: 0;
    }
  }

  & p {
    line-height: 25px;
    color: ${black};
    padding-top: 30px;
  }

  & .group-details {
    display: flex;
    justify-content: flex-end;

    @media (min-width: 768px) {
      order: -1;
    }
  }

  & svg {
    display: none;

    @media (min-width: 768px) {
      display: block;
      width: 209px;
      height: 173px;
      flex-grow: 1;
    }
  }
`;

export const Title = styled.h2`
  color: ${strongPurple};
  font-size: 21px;
  font-family: ${fontDash};
  max-height: 40px;

  & .hello-word {
    font-weight: 400;
  }

  & .dot {
    font-weight: 700;
    color: ${circleDetailColor};
  }
`;

export const WelcomeDetails = styled(Details)`
  width: 70px;
  height: 70px;
  background: linear-gradient(
    180deg,
    ${circleDetailColor} 0%,
    rgba(255, 199, 0, 0.6) 100%
  );
  bottom: 170px;
  left: 39px;

  @media (min-width: 768px) {
    bottom: 0;
    left: -45px;
    width: 126px;
    height: 126px;
  }
`;

export const WelcomeDetailsSec = styled(Details)`
  width: 32px;
  height: 32px;
  background: ${circleDetailColorSec};
  bottom: 185px;
  left: -18px;

  @media (min-width: 768px) {
    bottom: 25px;
    left: -147px;
    width: 63px;
    height: 63px;
  }
`;

export const MeetingImg = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 209px;
    height: 173px;
    flex-grow: 1;
  }
`;

export const GridContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 35px 35px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
