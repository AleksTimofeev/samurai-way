import React from 'react';
import avatar from '../../../../assets/image/avatar.png'
import styles from './Post.module.css'

type PropsType = {
  message: string
}

const Post: React.FC<PropsType> = ({message}) => {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt={'avatar'} />
      <span>{message}</span>
    </div>
  );
};

export default Post;