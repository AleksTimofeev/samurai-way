import React from 'react';
import avatar from '../../../../assets/image/avatar.png'
import styles from './Post.module.css'
import like from '../../../../assets/image/icons/like.png'
import {PostType} from "../../../../redux/profileReducer";

type PropsType = {
  postData: PostType
  incrementLikesCount: (idPost: string) => void
  decrementLikesCount: (idPost: string) => void
}

const Post: React.FC<PropsType> = ({
                                     postData: {
                                       message,
                                       id,
                                       likesCount
                                     }, incrementLikesCount, decrementLikesCount
                                   }) => {
  const incrementLikesCountHandler = () => {
    incrementLikesCount(id)
  }
  const decrementLikesCountHandler = () => {
    decrementLikesCount(id)
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={'avatar'}/>
      <span className={styles.message}>{message}</span>
      <button onClick={incrementLikesCountHandler} className={styles.likeButton}>
        <img className={styles.likeIcon} src={like} alt={'like'}/>
      </button>
      <span>{likesCount}</span>
      <button onClick={decrementLikesCountHandler} className={`${styles.likeButton} ${styles.dislike}`}>
        <img className={styles.likeIcon} src={like} alt={'like'}/>
      </button>
    </div>
  );
};

export default Post;