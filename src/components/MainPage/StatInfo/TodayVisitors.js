import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
`;
const TodayVisitorData = styled.div``;

export default () => {
  return (
    <Container>
      오늘의 방문 회원 수<TodayVisitorData>132명</TodayVisitorData>
    </Container>
  );
};
