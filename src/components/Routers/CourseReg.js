import React from "react";
import styled from "styled-components";
import CourseInfo from "../CourseReg/CourseInfo/CourseInfo";
import EnteranceInfo from "../CourseReg/EnteranceInfo/EnteranceInfo";
import AllCourses from "../CourseReg/AllCourses/AllCourses";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <Container>
      <CourseInfo />
      <EnteranceInfo />
      <AllCourses />
    </Container>
  );
};
