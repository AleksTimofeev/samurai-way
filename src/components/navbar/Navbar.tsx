import React from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {


  return (
    <div className={styles.wrapper}>
      <h2>Navbar</h2>

      <ul>
        <li>
          <Link to={'/profile'}>Profile</Link>
        </li>
        <li>
          <Link to={'/message'}>Message</Link>
        </li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;