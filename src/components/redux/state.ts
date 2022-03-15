import {v1} from "uuid";


export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type PostsType = {
  message: string
  likesCount: number
}
export type StateType = {
  dialogsPage: {
    dialogs: Array<DialogType>
    message: Array<MessageType>
  }
  profilePage: {
    posts: Array<PostsType>
  }
}

let state: StateType = {
  dialogsPage:{
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
    ]
  },
  profilePage:{
    posts: [
      {
        message: 'hello )))',
        likesCount: 3
      },
      {
        message: 'My first post',
        likesCount: 5
      }
    ]
  },
}

export default state