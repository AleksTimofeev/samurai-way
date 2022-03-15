import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import HomePage from "./components/homePage/HomePage";
import Dialogs from "./components/dialogs/Dialogs";
import state from "./components/redux/state";
import dialogs from "./components/dialogs/Dialogs";

function App(){

  let profileData = state.profilePage
  let dialogsData = state.dialogsPage

  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <Navbar/>
        <Switch>
          <Route path={'/'} exact render={() => <HomePage />}/>
          <Route path={'/profile'} render={() => <Profile data={profileData}/>}/>
          <Route path={'/dialogs'} render={() => <Dialogs data={dialogsData} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
