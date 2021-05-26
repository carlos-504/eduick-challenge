import styled from 'styled-components';

export const Body = styled.div`
  background: linear-gradient(#7a57fd, #6135d7);
  height: 100vh;
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
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
`;

export const Typography = styled.div`
  width: 100%;
  line-height: 57px;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 48px;
  color: #ffffff;
`;

export const SubTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 48px;
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

  /* & label input[type='radio'] {
    opacity: 0;
  } */
`;

export const InputRadio = styled.input`
  opacity: 0;
  vertical-align: sub;
`;
