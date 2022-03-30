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
type StoreType = {}


export let store = {
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
  },
  getState(){
    return this._state
  },
  addPost(){
    const message: string = this._state.profilePage.inputPostMessage
    if (message.length > 0) {
      this._state.profilePage.posts = [...this._state.profilePage.posts, {id: v1(), message: message, likesCount: 0}]
      this.inputPostMessageChange(``)
      this.rerender()
    }
  },
  inputPostMessageChange(value: string){
    this._state.profilePage.inputPostMessage = value
    this.rerender()
  },
  incrementLikesCount(id: string){
    this._state.profilePage.posts.map(post =>
      post.id === id ? post.likesCount += 1 : post
    )
    this.rerender()
  },
  decrementLikesCount(id: string){
    this._state.profilePage.posts.map(post => post.id === id ?
      post.likesCount !== 0 ?
        post.likesCount += -1 : post.likesCount = 0 : post)
    this.rerender()
  },
  subscribe(observer: ()=>void){
  this.rerender = observer
},
  rerender(){}
}