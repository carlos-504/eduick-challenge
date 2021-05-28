import styled from 'styled-components';

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
`;

export const Typography = styled.div`
  width: 100%;
  line-height: 57px;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: clamp(36px, 4vw, 48px);
  color: #ffffff;
`;

export const SubTitle = styled.h2`
  font-family: 'Poppins';
  font-size: clamp(36px, 4vw, 48px);
  color: #ffe8b2;
`;

export const TextHome = styled.div`
  color: #ffffff;
  margin-top: 40px;
  line-height: 191.68%;
`;

export const InputSearch = styled.input`
  background-color: #7955e8;
  border: solid 1px #ffffff8a;
  color: #ffffff;
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
  color: #ffffff;
  font-weight: 700;
`;

export const RoleBox = styled.div`
  background-color: #7955e8;
  border: solid 1px #ffffff8a;
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

export const DetailsYellow = styled(DetailsDash)`
  bottom: 644px;
  right: 54px;
  background: linear-gradient(
    180deg,
    rgba(255, 234, 164, 0) 3.65%,
    #ffeaa4 100%
  );
`;

export const DetailsPurple = styled(DetailsDash)`
  bottom: 1254.1px;
  right: 54px;
  background: linear-gradient(180deg, #864efd 0%, rgba(134, 78, 253, 0) 100%);
  transform: rotate(-21.37deg);
`;

export const DetailsCircle = styled.div`
  position: relative;
  bottom: 1622.1px;
  left: 256px;
  z-index: 2;
  width: 193px;
  height: 193px;
  background: linear-gradient(0deg, #ffc700 0%, rgba(255, 199, 0, 0.4) 100%);
  border-radius: 0 50% 50% 50%;
`;

export const DetailsYellowRight = styled(DetailsYellow)`
  bottom: 101px;
  left: 205px;
`;

export const DetailsPurpleRight = styled(DetailsPurple)`
  bottom: 727px;
  left: 205px;
`;
