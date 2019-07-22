import React from "react";
import styled from "styled-components";

const Name = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom: 6px solid #e6e6e6;
  border-radius: ${props => props.theme.borderRadius};
`;

export default () => {
  return (
    <Container>
      <Name>등록된 수업</Name>
    </Container>
  );
};
