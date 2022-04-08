import React from 'react';
import avatar from '../../../../assets/image/avatar.png'
import styles from './Post.module.css'
import like from '../../../../assets/image/icons/like.png'
import {
  PostType,
  store
} from "../../../redux/state";
import {decrementLikesCountActionCreator, incrementLikesCountActionCreator} from "../../../redux/profileReducer";

type PropsType = {
  postData: PostType
}

const Post: React.FC<PropsType> = ({postData: {
                                       message,
                                       id,
                                       likesCount
                                     }}) => {
  const incrementLikesCount = () => {
    store.dispatch(incrementLikesCountActionCreator(id))
  }
  const decrementLikesCount = () => {
  store.dispatch(decrementLikesCountActionCreator(id))
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={'avatar'}/>
      <span className={styles.message}>{message}</span>
      <button onClick={incrementLikesCount} className={styles.likeButton}>
        <img className={styles.likeIcon} src={like} alt={'like'}/>
      </button>
      <span>{likesCount}</span>
      <button onClick={decrementLikesCount} className={`${styles.likeButton} ${styles.dislike}`}>
        <img className={styles.likeIcon} src={like} alt={'like'}/>
      </button>
    </div>
  );
};

export default Post;