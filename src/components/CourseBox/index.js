import React from 'react';

import {
  CourseContainer,
  Course,
  CourseDetails,
  CourseName,
  ImgCointaner,
} from './styles';
import { ReactComponent as Stars } from '../../assets/images/dashboard/stars.svg';
import courseThumb from '../../assets/images/dashboard/course-thumb.png';

function CourseBox({ name, lessons }) {
  return (
    <CourseContainer>
      <Course>
        <ImgCointaner>
          <img src={courseThumb} alt="course-thumb" />
        </ImgCointaner>
        <CourseDetails>
          <div>
            <Stars />
          </div>
          <div className="lessons">{lessons} LESSONS</div>
        </CourseDetails>
        <CourseName>
          <h3>{name}</h3>
        </CourseName>
      </Course>
    </CourseContainer>
  );
}

export default CourseBox;
