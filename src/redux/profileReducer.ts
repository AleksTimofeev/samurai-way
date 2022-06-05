import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi, ProfileDataType} from "../api/api";

export const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
export const ADD_POST = 'ADD_POST'
export const INPUT_POST_MESSAGE_CHANGE = 'INPUT_POST_MESSAGE_CHANGE'
export const INCREMENT_LIKES_COUNT = 'INCREMENT_LIKES_COUNT'
export const DECREMENT_LIKES_COUNT = 'DECREMENT_LIKES_COUNT'
export const LOADING_PROFILE_DATA = 'LOADING_PROFILE_DATA'
export const SET_USER_STATUS = 'SET_USER_STATUS'

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type ProfilePageType = {
  inputPostMessage: string
  posts: Array<PostType>
  profileData: ProfileDataType
  loadingProfileData: boolean
  userStatus: string
}

const initialState: ProfilePageType = {
  inputPostMessage: '',
  posts: [],
  profileData: {
    aboutMe: '',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: '',
    userId: 0,
    photos: {
      small: null,
      large: null
    }
  },
  userStatus: '',
  loadingProfileData: false
}


export type ActionsType = ReturnType<typeof setProfileData> | ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof inputPostMessageActionCreator> | ReturnType<typeof incrementLikesCountActionCreator> |
  ReturnType<typeof decrementLikesCountActionCreator> | ReturnType<typeof loadingProfileData> |
  ReturnType<typeof setUserStatus>


const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {

  switch (action.type) {
    case SET_PROFILE_DATA: return {...state,
      profileData: action.profileData,
      loadingProfileData: false
    }
    case LOADING_PROFILE_DATA: return {...state,
      loadingProfileData: true
    }
    case SET_USER_STATUS: return {...state,
      userStatus: action.status
    }
    case ADD_POST:
      const message: string = state.inputPostMessage
      if (message.length > 0) {
        return {...state, posts: [...state.posts, {id: v1(), message: message, likesCount: 0}], inputPostMessage: ''}
      }
      return state
    case INPUT_POST_MESSAGE_CHANGE:
      return {...state, inputPostMessage: action.value}
    case INCREMENT_LIKES_COUNT:

      let newPosts = state.posts.map(post => post.id === action.idPost ? {
        ...post,
        likesCount: post.likesCount + 1
      } : {...post})
      return {...state, posts: newPosts}
    case DECREMENT_LIKES_COUNT:
      let newP = state.posts.map(post => (
        post.id === action.idPost && post.likesCount !== 0 ? {...post, likesCount: post.likesCount += -1} : {...post}
      ))
      return {...state, posts: newP}
    default:
      return state
  }
}

export const setProfileData = (profileData: ProfileDataType) => {
  return {type: SET_PROFILE_DATA, profileData} as const
}
export const setUserStatus = (status: string) => {
  return {type: SET_USER_STATUS, status} as const
}
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const inputPostMessageActionCreator = (value: string) => ({type: INPUT_POST_MESSAGE_CHANGE, value} as const)
export const incrementLikesCountActionCreator = (idPost: string) => ({type: INCREMENT_LIKES_COUNT, idPost} as const)
export const decrementLikesCountActionCreator = (idPost: string) => ({type: DECREMENT_LIKES_COUNT, idPost} as const)
const loadingProfileData = () => ({type: LOADING_PROFILE_DATA} as const)

export const getProfileData = (userId: number) => (dispatch: Dispatch) => {
  dispatch(loadingProfileData())
  profileApi.getProfileData(userId).then(data => dispatch(setProfileData(data)))
  profileApi.getUserStatus(userId).then(res => dispatch(setUserStatus(res.data)))
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
  profileApi.updateStatus(status).then(res => {
    if(res.resultCode === 0){
      dispatch(setUserStatus(status))
    }
  })
}

export default profileReducer