import React from 'react';
import styles from "../Dialogs.module.css";
import {MessageType} from "../../redux/state";


const Message: React.FC<MessageType> = ({message}) => {
  return (
    <div className={styles.message}>{message}</div>
  );
};

export default Message;