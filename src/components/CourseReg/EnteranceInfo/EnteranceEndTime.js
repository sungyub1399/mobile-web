import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: auto;
  background-color: #f4f6fc;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 17px;
`;

const TextInput = styled.input`
  width: 65%;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #bebebe;
`;

export default () => {
  return (
    <Container>
      <Text>제한시간(끝):</Text>
      <TextInput type="time" />
    </Container>
  );
};
