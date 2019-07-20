import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
`;
const RegMemberData = styled.div``;

export default () => {
  return (
    <Container>
      가입 회원<RegMemberData>(77명)</RegMemberData>
    </Container>
  );
};
