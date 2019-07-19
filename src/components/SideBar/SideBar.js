import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faHome, faChartBar, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = styled.nav`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 40px;
  position: fixed;
  height: 100%;
  background: #e0e6f7;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
`;

const Group = styled.div`
  border-bottom: 1px solid grey;
  padding: 20px;
  color: black;
  z-index: 2;
`;

export default () => {
  return (
    <SideBar>
      <Link to="/">
        <Group>
          <FontAwesomeIcon icon={faHome} /> Home
        </Group>
      </Link>
      <Link to="/stat">
        <Group>
          <FontAwesomeIcon icon={faChartBar} /> 통계
        </Group>
      </Link>
      <Link to="/setting">
        <Group>
          <FontAwesomeIcon icon={faCog} /> 설정
        </Group>
      </Link>
    </SideBar>
  );
};
