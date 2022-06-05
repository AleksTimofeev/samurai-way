import React, {useEffect} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/image/logo.png'
import {useSelector} from "react-redux";
import {authMe, AuthStateType, UserDataType} from "../../redux/authReducer";
import {AppStateType, useAppDispatch} from "../../redux/store";
import {useNavigate} from "react-router-dom";

type PropsType = {}

const Header: React.FC<PropsType> = () => {
  const dispatch = useAppDispatch()
  const userData = useSelector((state: AppStateType): AuthStateType => state.auth)
  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

  useEffect(() => {
    dispatch(authMe())
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
          <button onClick={handleClickLogin}><h3>Login</h3></button>
        </div>}
    </div>
  );
};

export default Header;