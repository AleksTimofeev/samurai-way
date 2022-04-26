import React, {ChangeEvent} from 'react';

type PropsType = {
  newMessage: string
  onChangeInputMessage: (value: string) => void
  addMessage: () => void
}

const AddMessage: React.FC<PropsType> = ({newMessage, onChangeInputMessage, addMessage}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputMessage(e.currentTarget.value)

  }
  const clickHandle = () => {
    addMessage()
  }
  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && addMessage()
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