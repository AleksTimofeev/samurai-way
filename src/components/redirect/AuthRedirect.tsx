import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import LoginPage from "../loginPage/LoginPage";

type PropsType = {
  children: React.ReactNode
}

const AuthRedirect: React.FC<PropsType> = ({children}) => {
  const isAuth = useSelector((state: AppStateType): boolean => state.auth.logged)
  return <>
    {
      isAuth ? children : <LoginPage />
    }
  </>;
};

export default AuthRedirect;