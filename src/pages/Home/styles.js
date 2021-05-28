import styled from 'styled-components';
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
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

export const ContainerWrap = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
`;

export const LandImg = styled.img`
  width: 345px;
  height: 680px;
  position: relative;
  z-index: 1;
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
  min-width: 550px;
  margin-left: 30px;
`;

export const Typography = styled.div`
  font-family: ${fontDash};
  width: 100%;
  line-height: 57px;
`;

export const Title = styled.h1`
  font-family: inherit;
  font-weight: 400;
  font-size: clamp(36px, 4vw, 48px);
  color: ${white};
`;

export const SubTitle = styled.h2`
  font-family: inherit;
  font-size: clamp(36px, 4vw, 48px);
  color: ${beige};
`;

export const TextHome = styled.div`
  color: ${white};
  margin-top: 40px;
  line-height: 191.68%;
`;

export const InputSearch = styled.input`
  background-color: ${primaryPurple};
  border: solid 1px ${borderColor};
  color: ${white};
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 40px;
  font-size: 1rem;
`;

export const GroupActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  color: ${white};
  font-weight: 700;
`;

export const RoleBox = styled.div`
  background-color: ${primaryPurple};
  border: solid 1px ${borderColor};
  padding: 14px 15px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
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
`;

export const PrimaryDetailRight = styled(PrimaryDetail)`
  bottom: 101px;
  left: 205px;
`;

export const SecondyDetailRight = styled(SecondyDetail)`
  bottom: 727px;
  left: 205px;
`;
