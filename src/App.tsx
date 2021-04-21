// import React from "react";
import "./App.css";
import "./utils/codemirror-github-light-theme.css";
import Main from "./pages/Main";
import View from "./pages/View";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./themes/common.less";

import HeaderBar from "./components/HeaderBar/index";
import "@src/utils/window-event";

function App() {
  return (
    <div className="rs-root">
      <Router>
        <Switch>
          <Route exact path="/">
            <HeaderBar></HeaderBar>
            <div className="rs-body">
              <Main></Main>
            </div>
          </Route>
          <Route path="/preview">
            <div className="rs-preview">
              <View></View>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
