import React from "react";
import styled from "styled-components";
import Analysis from "./Analysis";
import Sales from "./Sales";
import TodayVisitors from "./TodayVisitors";
import RegMembers from "./RegMembers";
import ChangeMembers from "./ChangeMembers";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom: 6px solid #e6e6e6;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default () => {
  return (
    <Container>
      <Analysis />
      <TodayVisitors />
      <RegMembers />
      <ChangeMembers />
      <Sales />
    </Container>
  );
};
