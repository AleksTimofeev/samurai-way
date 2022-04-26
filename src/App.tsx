import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styles from './App.module.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {HomePageContainer} from "./components/homePage/HomePageContainer";
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { ProfileContainer } from './components/profile/ProfileContainer';
import { UsersPageContainer } from './components/UserPage/UsersPageContainer';


const App = () => {

  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path={'/home-page'} element={<HomePageContainer />}/>
          <Route path={'/profile'} element={<ProfileContainer />}/>
          <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
          <Route path={'/users'} element={<UsersPageContainer />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
