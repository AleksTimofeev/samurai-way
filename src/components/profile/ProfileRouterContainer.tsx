import React from 'react';
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const ProfileRouterContainer: React.FC<ProfilePropsType> = (props) => {

  const userId = useSelector((state:AppStateType):string | null => state.auth.id)
  const {id} = useParams()

  return (
    <ProfileAPIContainer {...props} userId={id || userId || '123'} />
  );
};

export default ProfileRouterContainer;