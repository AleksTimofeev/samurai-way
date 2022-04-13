import './index.css'
import {store} from "./components/redux/state";
// import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

import { createRoot } from 'react-dom/client';
const container: any = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />)


const Render = () => {
  return (
    root.render(<App state={store.getState()} />)
    // ReactDOM.render(
    //   <App state={store.getState()} />,
    //   document.getElementById('root')
    // )
  )
}

store.subscribe(Render)

Render()

