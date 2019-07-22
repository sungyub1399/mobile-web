import React from "react";
import styled from "styled-components";
import CourseName from "./CourseName";
import CourseMonth from "./CourseMonth";
import CourseDay from "./CourseDay";
import CoursePrice from "./CoursePrice";
import CourseNumTimes from "./CourseNumTimes";

const Name = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom: 6px solid #e6e6e6;
  border-radius: ${props => props.theme.borderRadius};
`;

export default () => {
  return (
    <Container>
      <Name>수강정보</Name>
      <CourseName />
      <CourseMonth />
      <CourseDay />
      <CourseNumTimes />
      <CoursePrice />
    </Container>
  );
};
