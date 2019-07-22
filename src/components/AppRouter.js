import React, { useState } from "react";
import Header from "./Header/Header.js";
import Home from "./Routers/Home";
import Stat from "./Routers/Stat";
import CourseReg from "./Routers/CourseReg";
import PTReg from "./Routers/PTReg";
import LockerReg from "./Routers/LockerReg";
import Message from "./Routers/Message";
import Setting from "./Routers/Setting";
import styled from "styled-components";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function AppRouter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetIsMenuOpen = e => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleWindowClick = e => {
    if (isMenuOpen && e.target !== { Container }) {
      //아직까지 완벽하게 구성 못함 SideBar가 들어가야됨
      //지금 홈에서만 기능 가능 그리고 sidebar 밑에 눌러도 닫힘.
      // 다른 route에서도 기능 구현을 해야됨
      setIsMenuOpen(false);
    }
  };

  return (
    <Container onClick={handleWindowClick}>
      <Router>
        <Header
          isMenuOpen={isMenuOpen}
          handleSetIsMenuOpen={handleSetIsMenuOpen}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stat" exact component={Stat} />
          <Route path="/courseReg" exact component={CourseReg} />
          <Route path="/ptReg" exact component={PTReg} />
          <Route path="/lockerReg" exact component={LockerReg} />
          <Route path="/message" exact component={Message} />
          <Route path="/setting" exact component={Setting} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Container>
  );
}

export default AppRouter;
