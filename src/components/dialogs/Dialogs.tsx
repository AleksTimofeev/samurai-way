import React, {useState} from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import {DialogType, MessageType} from "../redux/state";


type PropsType = {
  data: {
    dialogs: Array<DialogType>
    message: Array<MessageType>
  }
}

const Dialogs:React.FC<PropsType> = ({data}) => {
  let [dialogs, setDialogs] = useState<Array<DialogType>>(data.dialogs)
  let [message, setMessage] = useState<Array<MessageType>>(data.message)
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
          {dialogs.map((item, i) => <Dialog key={i} name={item.name} id={item.id}/>)}
        </div>
        <div className={styles.dialogsItem}>
          {message.map((item, i) => <Message key={i} message={item.message} id={item.id}  />)}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;