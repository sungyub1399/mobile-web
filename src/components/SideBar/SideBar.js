import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  faHome,
  faChartBar,
  faCog,
  faFileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = styled.nav`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: fixed;
  height: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
`;

const Group = styled.div`
  align-items: center;
  font-size: 25px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: black;
  z-index: 2;
  :hover {
    background-color: #f4f4f4;
  }
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
      <Link to="/CourseReg">
        <Group>
          <FontAwesomeIcon icon={faFileAlt} /> 수업등록
        </Group>
      </Link>
      <Link to="/message">
        <Group>
          <FontAwesomeIcon icon={faEnvelope} /> 문자보내기
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
