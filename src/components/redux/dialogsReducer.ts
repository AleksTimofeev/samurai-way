import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./state";

const NEW_MESSAGE = 'NEW_MESSAGE'
const ADD_MESSAGE_DIALOG = 'ADD_MESSAGE_DIALOG'


const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

  if (action.type === NEW_MESSAGE){
    state.newMessage = action.value
  }
  if (action.type === ADD_MESSAGE_DIALOG){
    if( state.newMessage.length > 0 ){
      state.message = [...state.message, {id: v1(), message: state.newMessage}]
      state.newMessage = ''
    }
  }

  return state
}

export const newMessageActionCreator = (value: string) => ({type: NEW_MESSAGE, value}as const)
export const addMessageDialogActionCreator = () => ({type: ADD_MESSAGE_DIALOG} as const)

export default dialogsReducer