import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/image/logo.png'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt={'avatar'} />
      <h1>Header</h1>
    </div>
  );
};

export default Header;