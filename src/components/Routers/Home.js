import React from "react";
import BasicInfoBox from "../MainPage/BasicInfo/BasicInfoBox";
import GraphInfoBox from "../MainPage/GraphInfo/GraphInfoBox";
import StatInfoBox from "../MainPage/StatInfo/StatInfoBox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <>
      <Container>
        <BasicInfoBox />
        <StatInfoBox />
        <GraphInfoBox />
      </Container>
    </>
  );
};
