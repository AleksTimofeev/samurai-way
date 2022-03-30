import React from 'react';
import avatar from '../../../../assets/image/avatar.png'
import styles from './Post.module.css'
import like from '../../../../assets/image/icons/like.png'
import {PostType, store} from "../../../redux/state";

type PropsType = {
  postData: PostType
}

const Post: React.FC<PropsType> = ({postData: {
                                       message,
                                       id,
                                       likesCount
                                     }}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={'avatar'}/>
      <span className={styles.message}>{message}</span>
      <button onClick={()=>store.incrementLikesCount(id)} className={styles.likeButton}>
        <img className={styles.likeIcon} src={like} alt={'like'}/>
      </button>
      <span>{likesCount}</span>
      <button onClick={()=>store.decrementLikesCount(id)} className={`${styles.likeButton} ${styles.dislike}`}>
        <img className={styles.likeIcon} src={like} alt={'like'}/>
      </button>
    </div>
  );
};

export default Post;