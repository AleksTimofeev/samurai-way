import React, {useState} from 'react';
import Post from "./post/Post";
import styles from './MyPosts.module.css'

const MyPosts = () => {

  const [dataPosts, setDataPosts] = useState([
    'hello )))', 'My first post'
  ])
  const [postMessage, setPostMessage] = useState('')

  const handleAddPost = () => {
    setDataPosts([...dataPosts, postMessage])
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
          <Post message={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;