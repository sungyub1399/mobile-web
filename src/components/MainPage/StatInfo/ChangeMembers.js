import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
`;
const ChangeMembersData = styled.div``;

export default () => {
  return (
    <Container>
      가입/만기 수 변동<ChangeMembersData>(+77명)</ChangeMembersData>
    </Container>
  );
};
