import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = () => {
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
          <Dialog name={'Alex'} id={'1'} />
          <Dialog name={'Sophia'} id={'2'} />
          <Dialog name={'Olga'} id={'3'} />
          <Dialog name={'Max'} id={'4'} />
          <Dialog name={'Vavan'} id={'5'} />
        </div>
        <div className={styles.dialogsItem}>
          <Message message={'Hello)))'} />
          <Message message={'How are you?'} />
          <Message message={'By!!!'} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;