import React from "react";
import SideBar from "../SideBar/SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: #f4f6fc;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom: 6px solid #e6e6e6;
  border-radius: ${props => props.theme.borderRadius};
  z-index: 2;
`;

const LogoName = styled.div`
  font-size: 30px;
`;

export default ({ isMenuOpen, handleSetIsMenuOpen }) => {
  return (
    <>
      <Container>
        <FontAwesomeIcon
          onClick={handleSetIsMenuOpen}
          icon={faBars}
          size="2x"
        />
        <LogoName>GYM BOX</LogoName>
      </Container>
      {isMenuOpen && <SideBar />}
    </>
  );
};
