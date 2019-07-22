import React from "react";
import styled from "styled-components";
import gymBoxLogo from "../../../Pictures/gymBoxLogo.jpg";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom: 3px solid #e6e6e6;
  border-radius: ${props => props.theme.borderRadius};
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const FitnessName = styled.div``;

const MemText = styled.div`
  padding-top: 3px;
  font-size: 14px;
  color: rgb(111, 108, 108);
`;

const FitnessMemData = styled.div``;

export default () => {
  return (
    <Container>
      <Image src={gymBoxLogo} alt="GymBox" />
      <FitnessName>
        GYM BOX
        <MemText>회원 수</MemText>
      </FitnessName>
      <FitnessMemData>(1958)</FitnessMemData>
    </Container>
  );
};
//FitnessMemData는 직접 data 가져와서 실제 몇명인지 기재를 해줘야됨.
