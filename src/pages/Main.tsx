// import React from "react";
import SplitPane from "react-split-pane";
import Editor from "./Editor";
import View from "./View";
import "./Main.less";
import Shortcuts from "@src/components/Shortcuts";
import OnePage from "@src/components/OnePage";

const Main = () => {
  return (
    <div className="rs-container">
      <SplitPane split="vertical" minSize={450}>
        <Editor></Editor>
        <View></View>
      </SplitPane>
      <Shortcuts></Shortcuts>
      <OnePage></OnePage>
    </div>
  );
};

export default Main;
