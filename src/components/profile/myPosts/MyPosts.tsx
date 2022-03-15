import React, {useState} from 'react';
import Post from "./post/Post";
import styles from './MyPosts.module.css'
import {PostsType} from "../../redux/state";

type PropsType = {
  data: Array<PostsType>
}

const MyPosts: React.FC<PropsType> = ({data}) => {

  const [dataPosts, setDataPosts] = useState(data)
  const [postMessage, setPostMessage] = useState('')

  const handleAddPost = () => {
    setDataPosts([...dataPosts, {message: postMessage, likesCount: 0}])
    setPostMessage('')
  }
  const handleChange = (e: any) => {
    setPostMessage(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <h3>My posts</h3>
      <textarea value={postMessage} onChange={handleChange}/>
      <button onClick={handleAddPost}>Add post</button>
      <div className={styles.posts}>
        {dataPosts.map((item, index) => (
          <Post message={item.message} likes={item.likesCount} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;