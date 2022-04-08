import React, {ChangeEvent} from 'react';
import Post from "./post/Post";
import styles from './MyPosts.module.css'
import {ProfilePageType, store} from "../../redux/state";
import {addPostActionCreator, inputPostMessageActionCreator} from "../../redux/profileReducer";

type PropsType = {
  profilePageData: ProfilePageType
}

const MyPosts: React.FC<PropsType> = ({profilePageData: {
                                          posts,
                                          inputPostMessage
                                        }}) => {


  const inputPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    store.dispatch(inputPostMessageActionCreator(e.currentTarget.value))
  }
  const addPost = () => {
    store.dispatch(addPostActionCreator())
  }

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <textarea value={inputPostMessage} onChange={inputPostHandler}/>
      <button onClick={addPost}>Add post</button>
      <div className={styles.posts}>
        {posts.map((item, index) => (
          <Post postData={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;