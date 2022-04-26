import React from 'react';
import styles from './Dialogs.module.css'
import {DialogsPropsType} from "./DialogsContainer";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import AddMessage from "./message/AddMessage/AddMessage";


const Dialogs: React.FC<DialogsPropsType> = ({
                                               dialogs, message, newMessage,
                                               addMessageDialogActionCreator, newMessageActionCreator
                                             }) => {

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
          {dialogs.map((item, i) => <Dialog key={i} name={item.name} id={item.id}/>)}
        </div>
        <div className={styles.dialogsItem}>
          {message.map((item, i) => <Message key={i} message={item.message} id={item.id}/>)}
        </div>
        <AddMessage
          newMessage={newMessage}
          addMessage={addMessageDialogActionCreator}
          onChangeInputMessage={newMessageActionCreator}
        />
      </div>
    </div>
  );
};

export default Dialogs;