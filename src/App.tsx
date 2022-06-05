import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styles from './App.module.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { ProfileContainer } from './components/profile/ProfileContainer';
import { UsersPageContainer } from './components/UserPage/UsersPageContainer';
import LoginPage from "./components/loginPage/LoginPage";
import HomePage from "./components/homePage/HomePage";
import AuthRedirect from "./components/redirect/AuthRedirect";


const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path={'/home-page'} element={<HomePage />}/>
          <Route path={'/profile'} element={<AuthRedirect><ProfileContainer /></AuthRedirect>}/>
          <Route path={'/profile/:id'} element={<AuthRedirect><ProfileContainer /></AuthRedirect>}/>
          <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
          <Route path={'/users'} element={<AuthRedirect><UsersPageContainer /></AuthRedirect>}/>

          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
