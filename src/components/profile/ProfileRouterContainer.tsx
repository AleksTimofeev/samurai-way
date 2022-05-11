import React from 'react';
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {useParams} from "react-router-dom";

const ProfileRouterContainer: React.FC<ProfilePropsType> = (props) => {

  const {id} = useParams()

  return (
    <ProfileAPIContainer {...props} userId={id ? id : '2'} />
  );
};

export default ProfileRouterContainer;