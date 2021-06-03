import styled from 'styled-components';
import { Btn } from '../../components/Button/styles';
import {
  white,
  beige,
  primaryPurple,
  borderColor,
  primaryDetailColor,
  secondaryDetailColor,
  circleDetailColor,
  fontDash,
} from '../../GlobalStyle';

const DetailsDash = styled.div`
  width: 345px;
  height: 680px;
  border-radius: 0 338px;
  position: relative;

  @media (max-width: 767px) {
    width: 208px;
    height: 415px;
  }
`;

export const Body = styled.div`
  background: linear-gradient(
    0deg,
    rgba(32, 14, 100, 1) 26%,
    rgba(97, 53, 215, 1) 26%,
    rgba(122, 87, 253, 1) 100%
  );
  height: 100vh;
  overflow: hidden;

  @media (max-width: 767px) {
    min-height: 100vh;
    height: unset;
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 90px;

  @media (max-width: 767px) {
    justify-content: unset;
    margin-top: 25px;
  }
`;

export const ContainerWrap = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    width: 100%;
  }

  & .details-container {
    display: flex;
    justify-content: center;
    max-height: 580px;
    flex-grow: 1;
  }
`;

export const LandImg = styled.img`
  width: 345px;
  height: 680px;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    width: 208px;
    height: 415px;
    top: 63px;
    left: 17px;
  }
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
  min-width: 550px;
  margin-left: 40px;

  @media (max-width: 767px) {
    margin: 0 auto;
    min-width: unset;
    width: unset;
  }
`;

export const Typography = styled.div`
  font-family: ${fontDash};
  width: 100%;
  line-height: 57px;
  font-size: clamp(32px, 4vw, 48px);

  & .title {
    font-family: inherit;
    font-weight: 400;
    color: ${white};
  }

  & .subtitle {
    font-family: inherit;
    color: ${beige};
  }

  @media (max-width: 767px) {
    line-height: 40px;
  }
`;

export const TextHome = styled.div`
  color: ${white};
  margin-top: 40px;
  line-height: 191.68%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  & .input-search {
    background-color: ${primaryPurple};
    border: solid 1px ${borderColor};
    color: ${white};
    border-radius: 4px;
    padding: 10px 20px;
    margin-top: 40px;
    font-size: 1rem;
    width: 100%;

    @media (max-width: 767px) {
      min-width: 50%;
      margin-top: 60px;
    }
  }

  @media (max-width: 767px) {
    max-width: 87vw;
  }
`;

export const Button = styled(Btn)`
  width: 35%;
  text-align: center;

  @media (max-width: 767px) {
    width: 50vh;
  }
`;

export const GroupActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  color: ${white};
  font-weight: 700;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: unset;
    margin-top: 15px;
  }

  & .group-role {
    display: flex;
    justify-content: space-between;
    width: 62%;

    @media (max-width: 767px) {
      max-width: 87vw;
      margin-bottom: 15px;
      width: unset;
    }
  }
`;

export const RoleBox = styled.div`
  background-color: ${primaryPurple};
  border: solid 1px ${borderColor};
  padding: 14px 15px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 48%;

  @media (max-width: 767px) {
    font-size: 11px;
    padding-right: 10px;
    padding-left: 10px;
    min-width: 130px;
    width: 40vw;
    height: 42px;
  }
`;

export const InputRadio = styled.input`
  margin-top: 0;
  margin-right: 5px;
`;

export const PrimaryDetail = styled(DetailsDash)`
  bottom: 644px;
  right: 54px;
  background: linear-gradient(
    180deg,
    rgba(255, 234, 164, 0) 3.65%,
    ${primaryDetailColor} 100%
  );

  @media (max-width: 767px) {
    bottom: 330px;
    right: 6px;
  }
`;

export const SecondyDetail = styled(DetailsDash)`
  bottom: 1254.1px;
  right: 54px;
  background: linear-gradient(
    180deg,
    ${secondaryDetailColor} 0%,
    rgba(134, 78, 253, 0) 100%
  );
  transform: rotate(-21.37deg);

  @media (max-width: 767px) {
    bottom: 696px;
    right: 4px;
  }
`;

export const DetailsCircle = styled.div`
  position: relative;
  bottom: 1622.1px;
  left: 256px;
  z-index: 2;
  width: 193px;
  height: 193px;
  background: linear-gradient(
    0deg,
    ${circleDetailColor} 0%,
    rgba(255, 199, 0, 0.4) 100%
  );
  border-radius: 0 50% 50% 50%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const DetailsRight = styled.div`
  @media (max-width: 1440px) {
    position: relative;
    right: -10px;
    transition: 3s;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PrimaryDetailRight = styled(PrimaryDetail)`
  bottom: 101px;
  left: 205px;
`;

export const SecondyDetailRight = styled(SecondyDetail)`
  bottom: 727px;
  left: 205px;
`;
