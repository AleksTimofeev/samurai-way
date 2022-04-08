import {v1} from "uuid";
import {ProfilePageType} from "./state";

export const ADD_POST = 'ADD_POST'
export const INPUT_POST_MESSAGE_CHANGE = 'INPUT_POST_MESSAGE_CHANGE'
export const INCREMENT_LIKES_COUNT = 'INCREMENT_LIKES_COUNT'
export const DECREMENT_LIKES_COUNT = 'DECREMENT_LIKES_COUNT'

export type ProfileActionsType =
  ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof inputPostMessageActionCreator> |
  ReturnType<typeof incrementLikesCountActionCreator> |
  ReturnType<typeof decrementLikesCountActionCreator>

const profileReducer = (state: ProfilePageType, action: ProfileActionsType) => {

  switch (action.type) {
    case ADD_POST:
      const message: string = state.inputPostMessage
      if (message.length > 0) {
        state.posts = [...state.posts, {id: v1(), message: message, likesCount: 0}]
        state.inputPostMessage = ''
      }
      return state
    case INPUT_POST_MESSAGE_CHANGE:
      state.inputPostMessage = action.value
      return state
    case INCREMENT_LIKES_COUNT:
      state.posts.map(post => post.id === action.idPost ? post.likesCount += 1 : post)
      return state
    case DECREMENT_LIKES_COUNT:
      state.posts.map(post => post.id === action.idPost ?
        post.likesCount !== 0 ?
          post.likesCount += -1 : post.likesCount = 0 : post)
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const inputPostMessageActionCreator = (value: string) => ({type: INPUT_POST_MESSAGE_CHANGE, value}as const)
export const incrementLikesCountActionCreator = (idPost: string) => ({type: INCREMENT_LIKES_COUNT, idPost}as const)
export const decrementLikesCountActionCreator = (idPost: string) => ({type: DECREMENT_LIKES_COUNT, idPost}as const)

export default profileReducer