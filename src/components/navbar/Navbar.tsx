import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {



  return (
    <div className={styles.wrapper}>
      <h2>Navbar</h2>
      <ul>
        <li>Profile</li>
        <li>Message</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;