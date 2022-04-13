import React, {ChangeEvent} from 'react';
import {store} from "../../../redux/state";
import {addMessageDialogActionCreator, newMessageActionCreator} from "../../../redux/dialogsReducer";

type PropsType = {
  newMessage: string
}

const AddMessage: React.FC<PropsType> = ({newMessage}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    store.dispatch(newMessageActionCreator(e.currentTarget.value))
  }
  const clickHandle = () => {
    store.dispatch(addMessageDialogActionCreator())
  }
  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && store.dispatch(addMessageDialogActionCreator())
  }

  return (
    <div>
      <input
        type={'text'}
        value={newMessage}
        onChange={handleChange}
        onKeyPress={handleOnEnter}
      />
      <button
        onClick={clickHandle}
      >add</button>
    </div>
  );
};

export default AddMessage;