import React, {ChangeEvent} from 'react';
import Post from "./post/Post";
import styles from './MyPosts.module.css'
import {PostType} from "../../redux/profileReducer";

type PropsType = {
  inputPostMessageActionCreator: (value: string) => void
  addPostActionCreator: () => void
  incrementLikesCountActionCreator: (idPost: string) => void
  decrementLikesCountActionCreator: (idPost: string) => void
  inputPostMessage: string
  posts: Array<PostType>
}


const MyPosts: React.FC<PropsType> = ({
                                        inputPostMessageActionCreator,
                                        addPostActionCreator,
                                        incrementLikesCountActionCreator,
                                        inputPostMessage,
                                        decrementLikesCountActionCreator,
                                        posts
                                      }) => {


  const inputPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    inputPostMessageActionCreator(e.currentTarget.value)
  }

  const addPost = () => {
    addPostActionCreator()
  }

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <textarea value={inputPostMessage} onChange={inputPostHandler}/>
      <button onClick={addPost}>Add post</button>
      <div className={styles.posts}>
        {posts.map((item, index) => (
          <Post
            key={index}
            postData={item}
            incrementLikesCount={incrementLikesCountActionCreator}
            decrementLikesCount={decrementLikesCountActionCreator}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;