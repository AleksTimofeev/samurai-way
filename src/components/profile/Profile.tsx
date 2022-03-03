import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Profile</h2>
      <MyPosts />
    </div>
  );
};

export default Profile;