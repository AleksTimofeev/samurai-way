import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {}

const Navbar: React.FC<PropsType> = () => {

  return (
    <div className={styles.wrapper}>
      <h2>Navbar</h2>
      <ul className={styles.navigation}>
        <li>
          <NavLink className={({isActive}) => isActive ? styles.activeLink : '' } to={'/home-page'}>Home page</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? styles.activeLink : '' } to={'/profile'} >Profile</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? styles.activeLink : '' } to={'/dialogs'}>Dialogs</NavLink>
        </li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;