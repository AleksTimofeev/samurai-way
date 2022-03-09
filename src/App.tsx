import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Message from "./components/message/Message";
import HomePage from "./components/homePage/HomePage";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
  return (
    <div className={styles.app}>
      <Header/>

      <Router>
        <Navbar/>
        <Switch>
          <Route path={'/'} exact component={HomePage} />
          <Route path={'/profile'} component={Profile} />
          <Route path={'/message'} component={Message} />
          <Route path={'/dialogs'} component={Dialogs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
