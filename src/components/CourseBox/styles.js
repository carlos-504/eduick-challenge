import styled from 'styled-components';
import { fontDash, strongGrey, strongPurple } from '../../GlobalStyle';

export const CourseContainer = styled.div`
  margin-top: 20px;
  padding: 15px 15px 40px 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin: 20px auto;
`;

export const Course = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CourseDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  & .lessons {
    font-size: 10px;
    padding: 5px 13px;
    border-radius: 4px;
    background: ${strongGrey};
  }
`;

export const CourseName = styled.div`
  font-family: ${fontDash};
  font-size: 16px;
  line-height: 20px;
  color: ${strongPurple};

  @media (min-width: 768px) {
    font-size: 18px;
    align-self: flex-start;
  }
`;

export const ImgCointaner = styled.div`
  width: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }
`;
