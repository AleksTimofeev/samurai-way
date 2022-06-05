import React, {useEffect} from 'react';
import styles from './HomePage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "../../redux/store";
import {getT, getTAC} from "../../redux/homePageReducer";
import AuthRedirect from "../redirect/AuthRedirect";

type PropsType = {}

const HomePage: React.FC<PropsType> = () => {

  const dispatch = useAppDispatch()
  const title = useSelector((state: AppStateType): string => state.homePage.title)

  useEffect(() => {
    dispatch(getT())
  },[])

  return (
    <div className={styles.wrapper}>
      <h1>Home page</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default HomePage;