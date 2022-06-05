import React, {useEffect} from 'react';
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const ProfileRouterContainer: React.FC<ProfilePropsType> = (props) => {

  const userId = useSelector((state: AppStateType): number => state.auth.id)
  const id = Number(useParams().id)


  return (
    <>
      {userId && <ProfileAPIContainer {...props} userId={id || userId}/>}
    </>
  );
};

export default ProfileRouterContainer;