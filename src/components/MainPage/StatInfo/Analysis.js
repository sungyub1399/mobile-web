import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 13px;
`;

const Text = styled.div`
  padding-top: 3px;
  font-size: 14px;
  color: rgb(111, 108, 108);
`;

export default () => {
  return (
    <Container>
      분석
      <Text>지난 28일 (통계 자료)</Text>
    </Container>
  );
};
