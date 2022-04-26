import React, {ChangeEvent} from 'react';
import Post from "./post/Post";
import styles from './MyPosts.module.css'
import {ProfilePropsType} from "../ProfileContainer";



const MyPosts: React.FC<ProfilePropsType> = (props) => {


  const inputPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.inputPostMessageActionCreator(e.currentTarget.value)
  }

  const addPost = () => {
    props.addPostActionCreator()
  }

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <textarea value={props.inputPostMessage} onChange={inputPostHandler}/>
      <button onClick={addPost}>Add post</button>
      <div className={styles.posts}>
        {props.posts.map((item, index) => (
          <Post
            key={index}
            postData={item}
            incrementLikesCount={props.incrementLikesCountActionCreator}
            decrementLikesCount={props.decrementLikesCountActionCreator}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;