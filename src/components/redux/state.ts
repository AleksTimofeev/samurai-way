import {v1} from "uuid";
import profileReducer, {ProfileActionsType} from "./profileReducer";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer";

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
export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  inputPostMessage: string
  posts: Array<PostType>
}
export type StateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
}
export type StoreType = {
  _state: StateType
  getState: () => StateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
  rerender: () => void
}

export type ActionsTypes = ProfileActionsType | DialogsActionsType


export let store: StoreType = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      inputPostMessage: '',
      posts: [
        {
          id: v1(),
          message: 'hello )))',
          likesCount: 3
        },
        {
          id: v1(),
          message: 'My first post',
          likesCount: 5
        }
      ]
    },
  },
  getState() {
    return this._state
  },
  subscribe(observer: () => void) {
    this.rerender = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this.rerender()
  },
  rerender() {},
}