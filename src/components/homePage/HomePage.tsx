import React from 'react';
import styles from './HomePage.module.css'

type PropsType = {
  one: () => void
  two: () => void
  three: () => void
  changeText: (value: string) => void
  text: string
  value_01: string
  value_02: string
  value_03: string
}


const HomePage: React.FC<PropsType> = ({
  one, two, three, changeText, text, value_01, value_03, value_02
                                       }) => {


  return (
    <div className={styles.wrapper}>
      <h1>Home page</h1>
      <h3 onClick={one}>{value_01}</h3>
      <h3 onClick={two}>{value_02}</h3>
      <h3 onClick={three}>{value_03}</h3>
      <input type={'text'} value={text} onChange={(e) => changeText(e.currentTarget.value)}/>
    </div>
  );
};

export default HomePage;