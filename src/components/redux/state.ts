import {v1} from "uuid";
import Render from "../../Render";


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

let state: StateType = {
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
    ]
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
}

export const addPost = () => {
  const message: string = state.profilePage.inputPostMessage
  if (message.length > 0) {
    state.profilePage.posts = [...state.profilePage.posts, {id: v1(), message: message, likesCount: 0}]
    inputPostMessageChange(``)
    Render(state)
  }
}
export const inputPostMessageChange = (value: string) => {
  state.profilePage.inputPostMessage = value
  Render(state)
}
export const incrementLikesCount = (id: string) => {
  state.profilePage.posts.map(post =>
    post.id === id ? post.likesCount += 1 : post
  )
  Render(state)
}
export const decrementLikesCount = (id: string) => {
  state.profilePage.posts.map(post => post.id === id ?
    post.likesCount !== 0 ?
      post.likesCount += -1 : post.likesCount = 0 : post)
  Render(state)
}
export default state