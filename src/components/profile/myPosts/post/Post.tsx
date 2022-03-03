import React from 'react';
import avatar from '../../../../assets/image/avatar.png'
import styles from './Post.module.css'

const Post = () => {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt={'avatar'} />
      <span>Post</span>
    </div>
  );
};

export default Post;