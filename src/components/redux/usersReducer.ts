import {v1} from "uuid";

export type UserLocationType = {
  city: string
  country: string
}
export type UserType = {
  id: string
  fullName: string
  status: string
  avatarUrl: string
  followed: boolean,
  location: UserLocationType
}
export type UsersPageType = {
  users: Array<UserType>
}

type ActionsType = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof getUsers>

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'

const initialState = {
  users: [
    {
      id: v1(),
      fullName: 'Alex',
      status: 'tralivali',
      avatarUrl: '',
      followed: false,
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: v1(),
      fullName: 'Olga',
      status: 'tralivali tilitili',
      avatarUrl: '',
      followed: true,
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: v1(),
      fullName: 'Max',
      status: 'Yo',
      avatarUrl: '',
      followed: true,
      location: {
        city: 'Lida',
        country: 'Belarus'
      }
    },
  ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : {...user})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : {...user})
      }
    case GET_USERS:
      return {...state, users: [...state.users, ...action.users]}

    default:
      return state
  }
}

export const follow = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const getUsers = (users: Array<UserType>) => ({type: GET_USERS, users} as const)

export default usersReducer