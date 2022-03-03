import React from 'react';
import Post from "./post/Post";
import styles from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <textarea/>
      <button>Add post</button>
      <div className={styles.posts}>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;