import {v1} from "uuid";

export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type DialogsPageType = {
  dialogs: Array<DialogType>
  message: Array<MessageType>
  newMessage: string
}

type ActionsType = ReturnType<typeof newMessageActionCreator> | ReturnType<typeof addMessageDialogActionCreator>

const NEW_MESSAGE = 'NEW_MESSAGE'
const ADD_MESSAGE_DIALOG = 'ADD_MESSAGE_DIALOG'

const initialState = {
  dialogs: [
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Sophia'},
    {id: v1(), name: 'Olga'},
    {id: v1(), name: 'Max'}
  ],
  message: [
    {id: v1(), message: 'hello'},
    {id: v1(), message: 'by'},
    {id: v1(), message: 'yo'}
  ],
  newMessage: ''
}


const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {

  switch (action.type) {

    case NEW_MESSAGE:
      return {...state, newMessage: action.payload}

    case ADD_MESSAGE_DIALOG:
      if( state.newMessage.length > 0 ){
        return {...state, message: [...state.message, {id: v1(), message: state.newMessage}], newMessage: ''}
      }
      return state

    default: return state
  }
}

export const newMessageActionCreator = (payload: string) => ({type: NEW_MESSAGE, payload}as const)
export const addMessageDialogActionCreator = () => ({type: ADD_MESSAGE_DIALOG} as const)

export default dialogsReducer