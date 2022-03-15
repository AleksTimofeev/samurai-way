import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {PostsType} from "../redux/state";

type PropsType = {
  data: {posts: Array<PostsType>}
}

const Profile:React.FC<PropsType> = ({data}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Profile</h2>
      <MyPosts data={data.posts}/>
    </div>
  );
};

export default Profile;