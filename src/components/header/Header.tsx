import React, {memo, useEffect} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/image/logo.png'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, UserDataType} from "../redux/authReducer";
import {AppStateType} from "../redux/store";

type PropsType = {}

const Header: React.FC<PropsType> = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state: AppStateType): UserDataType => state.auth)

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(getUserData(res.data.data))

        }
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt={'avatar'}/>
      <h1>Header</h1>
      {userData.logged ?
        <div className={styles.login}>
          <h3>{userData.login}</h3>
        </div> :
        <div className={styles.login}>
          <button><h3>Login</h3></button>
        </div>}
    </div>
  );
};

export default Header;