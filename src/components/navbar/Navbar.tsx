import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {


  return (
    <div className={styles.wrapper}>
      <h2>Navbar</h2>

      <ul className={styles.navigation}>
        <li>
          <NavLink activeClassName={styles.activeLink} to={'/profile'} >Profile</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeLink} to={'/dialogs'}>Dialogs</NavLink>
        </li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;