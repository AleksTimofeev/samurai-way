import {v1} from "uuid";
// import {ActionsTypes, ProfilePageType} from "./state";

export const ADD_POST = 'ADD_POST'
export const INPUT_POST_MESSAGE_CHANGE = 'INPUT_POST_MESSAGE_CHANGE'
export const INCREMENT_LIKES_COUNT = 'INCREMENT_LIKES_COUNT'
export const DECREMENT_LIKES_COUNT = 'DECREMENT_LIKES_COUNT'

export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  inputPostMessage: string
  posts: Array<PostType>
}

const initialState = {
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
}
export type ActionsType = ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof inputPostMessageActionCreator> |
  ReturnType<typeof incrementLikesCountActionCreator> |
  ReturnType<typeof decrementLikesCountActionCreator>


const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

  switch (action.type) {

    case ADD_POST:
      const message: string = state.inputPostMessage
      if (message.length > 0) {
        return {...state, posts: [...state.posts, {id: v1(), message: message, likesCount: 0}], inputPostMessage: ''}
      }
      return state

    case INPUT_POST_MESSAGE_CHANGE:
      return {...state, inputPostMessage: action.value}

    case INCREMENT_LIKES_COUNT:

      let newPosts = state.posts.map(post => post.id === action.idPost ? {...post, likesCount : post.likesCount+1} : {...post})
      return {...state, posts: newPosts}

    case DECREMENT_LIKES_COUNT:
      let newP = state.posts.map(post => (
        post.id === action.idPost && post.likesCount !==0 ? {...post, likesCount: post.likesCount += -1} : {...post}
      ))
      return {...state, posts: newP}

    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const inputPostMessageActionCreator = (value: string) => ({type: INPUT_POST_MESSAGE_CHANGE, value}as const)
export const incrementLikesCountActionCreator = (idPost: string) => ({type: INCREMENT_LIKES_COUNT, idPost}as const)
export const decrementLikesCountActionCreator = (idPost: string) => ({type: DECREMENT_LIKES_COUNT, idPost}as const)

export default profileReducer