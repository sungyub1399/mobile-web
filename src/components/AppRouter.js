import React, { useState } from "react";
import Header from "./Header/Header.js";
import Home from "./Routers/Home";
import Stat from "./Routers/Stat";
import Setting from "./Routers/Setting";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function AppRouter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetIsMenuOpen = e => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Header
        isMenuOpen={isMenuOpen}
        handleSetIsMenuOpen={handleSetIsMenuOpen}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stat" exact component={Stat} />
        <Route path="/setting" exact component={Setting} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
