import React from 'react';
import avatar from '../../../../assets/image/avatar.png'
import styles from './Post.module.css'
import like from '../../../../assets/image/icons/like.png'

type PropsType = {
  message: string,
  likes: number
}

const Post: React.FC<PropsType> = ({message, likes}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={'avatar'} />
      <span className={styles.message}>{message}</span>
      <img className={styles.likeIcon} src={like} alt={like} />
      <span>{likes}</span>
    </div>
  );
};

export default Post;