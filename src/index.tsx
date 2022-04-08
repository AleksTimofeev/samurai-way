import './index.css'
import {store} from "./components/redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const Render = () => {

  return (
    ReactDOM.render(
      <App state={store.getState()} />,
      document.getElementById('root')
    )
  )
}

store.subscribe(Render)

Render()

