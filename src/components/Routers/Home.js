import React from "react";
import BasicInfoBox from "../MainPage/BasicInfo/BasicInfoBox";
import OtherInfoBox from "../MainPage/OtherInfo/OtherInfoBox";
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
        <OtherInfoBox />
      </Container>
    </>
  );
};
