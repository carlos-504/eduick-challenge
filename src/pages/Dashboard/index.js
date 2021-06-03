import React, { useState, useEffect } from 'react';
import HeaderDash from '../../components/HeaderDash';
import CourseBox from '../../components/CourseBox';
import Footer from '../../components/Footer';
import metting from '../../assets/images/dashboard/metting.svg';
import {
  Body,
  ContentPage,
  WelcomeSection,
  Container,
  Title,
  WelcomeDetails,
  WelcomeDetailsSec,
  MeetingImg,
  GridContainer,
} from './styles';
import { getCourses } from '../../services/coursesServices';

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((response) => setCourses(response));
  }, []);

  return (
    <Body>
      <HeaderDash />
      <ContentPage>
        <Container>
          <WelcomeSection>
            <div className="text-container">
              <Title>
                <span className="hello-word">Hello</span> Student
                <span className="dot">.</span>
              </Title>
              <p>
                Whether you are a student trying to find your ideal private
                language teachers/tutors
              </p>
            </div>
            <MeetingImg src={metting} />
            <div className="group-details">
              <WelcomeDetails></WelcomeDetails>
              <WelcomeDetailsSec></WelcomeDetailsSec>
            </div>
          </WelcomeSection>
          <GridContainer>
            {courses.map((course) => (
              <CourseBox name={course.name} lessons={course.lessons} />
            ))}
          </GridContainer>
        </Container>
      </ContentPage>
      <Footer />
    </Body>
  );
}

export default Dashboard;
