import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Dialog.module.css'
import {DialogsType} from "../../redux/state";


const Dialog: React.FC<DialogsType> = ({name, id}) => {

  return (
    <>
      <div className={styles.dialog}>
        <NavLink activeClassName={styles.activeLink} to={`/dialogs/${id}`}>{name}</NavLink>
      </div>
    </>
  );
};

export default Dialog;