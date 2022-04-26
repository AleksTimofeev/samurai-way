import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfilePropsType} from "./ProfileContainer";



const Profile:React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2>Profile</h2>
      <MyPosts {...props}/>
    </div>
  );
};

export default Profile;