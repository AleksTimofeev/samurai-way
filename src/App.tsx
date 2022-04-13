import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styles from './App.module.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import HomePage from "./components/homePage/HomePage";
import Dialogs from "./components/dialogs/Dialogs";
import {StateType} from "./components/redux/state";

type PropsType = {
  state: StateType
}
const App: React.FC<PropsType> = ({state}) => {
  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path={'/home-page'} element={<HomePage />}/>
          <Route path={'/profile'} element={<Profile profilePageData={state.profilePage}/>}/>
          <Route path={'/dialogs/*'} element={<Dialogs dialogsPageData={state.dialogsPage}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
