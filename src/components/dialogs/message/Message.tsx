import React from 'react';
import styles from "../Dialogs.module.css";
import {MessageType} from "../../../redux/dialogsReducer";

const Message:React.FC<MessageType> = ({message, id}) => {


  return (
    <>
    <div className={styles.message}>{message}</div>
    </>
  );
};

export default Message;