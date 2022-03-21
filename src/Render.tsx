import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import {StateType} from "./components/redux/state";

const Render = (state: StateType) => {
  return (
    ReactDOM.render(
      <App state={state} />,
      document.getElementById('root')
    )
  )
}

export default Render;