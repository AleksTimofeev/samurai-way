import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfilePageType} from "../redux/state";

type PropsType = {
  profilePageData: ProfilePageType
}

const Profile:React.FC<PropsType> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2>Profile</h2>
      <MyPosts profilePageData={props.profilePageData}/>
    </div>
  );
};

export default Profile;