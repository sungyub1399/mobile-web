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

const CheckDay = styled.div``;

const Text = styled.div``;

const Input = styled.input``;

const InputCheckBox = styled.div``;

export default () => (
  <Container>
    <Text>입실허용: </Text>
    <CheckDay>
      <InputCheckBox>
        <Input type="checkbox" />
        월
        <Input type="checkbox" />
        화
        <Input type="checkbox" />
        수
        <Input type="checkbox" />
        목
        <Input type="checkbox" />
        금
        <Input type="checkbox" />
        토
        <Input type="checkbox" />일
      </InputCheckBox>
    </CheckDay>
  </Container>
);
