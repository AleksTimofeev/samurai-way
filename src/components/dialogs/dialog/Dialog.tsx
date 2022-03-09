import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Dialogs.module.css";

type PropsType = {
  name: string,
  id: string
}

const Dialog: React.FC<PropsType> = ({name, id}) => {
  return (
    <>
      <div className={styles.dialog}>
        <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
      </div>
    </>
  );
};

export default Dialog;