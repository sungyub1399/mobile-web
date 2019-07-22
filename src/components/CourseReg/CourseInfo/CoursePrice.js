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

const WrapperInput = styled.div`
  width: 65%;
  border-radius: 5px;
`;

const TextInput = styled.input`
  width: 75%;
  font-size: 15px;
  padding: 10px 20px;
  border: 1px solid #bebebe;
`;

const TextBox = styled.input`
  width: 25%;
  font-size: 15px;
  padding: 10px 20px;
  border: 1px solid #bebebe;
`;

export default () => {
  return (
    <Container>
      <Text>수업금액:</Text>
      <WrapperInput>
        <TextInput type="number" placeholder="개월 수 를 입력하세요" min="0" />
        <TextBox placeholder="원" />
      </WrapperInput>
    </Container>
  );
};
