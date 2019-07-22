import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom: 3px solid #e6e6e6;
  border-radius: ${props => props.theme.borderRadius};
  align-items: center;
`;

const Text = styled.div`
  padding-bottom: 13px;
`;

export default () => {
  return (
    <Container>
      <Text>월 매출 비교 그래프</Text>
      <Text>일별 출입 회원수 (일주일 기준)</Text>
    </Container>
  );
};
