import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const SalesData = styled.div``;

export default () => {
  return (
    <Container>
      매출<SalesData>₩1,7000,000</SalesData>
    </Container>
  );
};
