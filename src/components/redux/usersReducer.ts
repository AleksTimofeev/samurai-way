import {v1} from "uuid";

export type UserLocationType = {
  city: string
  country: string
}
export type UserType = {
  id: number
  name: string
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
}
export type UsersPageType = {
  users: Array<UserType>
  totalCount: number
  currentPage: number
  numberPages: number
  loadingUsers: boolean
  followProgress: Array<number>
}

type ActionsType = ReturnType<typeof follow> |
  ReturnType<typeof unfollow> |
  ReturnType<typeof getUsers> |
  ReturnType<typeof changeCurrentPage> |
  ReturnType<typeof setNumberPages> |
  ReturnType<typeof isFetchingUsers> |
  ReturnType<typeof followUserOk>

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const FOLLOW_USER_OK = 'FOLLOW_USER_OK'
const GET_USERS = 'GET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const SET_NUMBER_PAGES = 'SET_NUMBER_PAGES'
const IS_FETCHING_USERS = 'IS_FETCHING_USERS'

const initialState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  numberPages: 0,
  loadingUsers: false,
  followProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {

    case FOLLOW:
      return {...state, followProgress: [...state.followProgress, action.userId]}
    case UNFOLLOW:
      return {...state, followProgress: [...state.followProgress, action.userId]}
    case FOLLOW_USER_OK: return {...state,
      followProgress: state.followProgress.filter(id => id !== action.userId)
    }
    case GET_USERS:
      return {...state, users: [...action.users], loadingUsers: false}
    case CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.pageNumber}
    case SET_NUMBER_PAGES:
      return {...state, numberPages: action.numberPages}
    case IS_FETCHING_USERS: return {...state,
      loadingUsers: true
    }

    default:
      return state
  }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const followUserOk = (userId:number) => ({type: FOLLOW_USER_OK, userId} as const)
export const getUsers = (users: Array<UserType>) => ({type: GET_USERS, users} as const)
export const changeCurrentPage = (pageNumber: number) => ({type: CHANGE_CURRENT_PAGE, pageNumber} as const)
export const setNumberPages = (numberPages: number) => ({type: SET_NUMBER_PAGES, numberPages} as const)
export const isFetchingUsers = () => ({type: IS_FETCHING_USERS} as const)

export default usersReducer