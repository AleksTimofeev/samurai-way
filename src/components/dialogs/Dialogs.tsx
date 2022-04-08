import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import {DialogsPageType} from "../redux/state";
import AddMessage from "./message/AddMessage/AddMessage";


type PropsType = {
  dialogsPageData: DialogsPageType
}

const Dialogs: React.FC<PropsType> = ({
                                        dialogsPageData: {
                                          dialogs,
                                          message,
                                          newMessage
                                        }
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
        <AddMessage newMessage={newMessage} />
      </div>
    </div>
  );
};

export default Dialogs;