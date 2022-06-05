import {AnyAction, Dispatch} from "redux";
import {authApi} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {Action} from "redux-ts";
import {AnyAaaaRecord} from "dns";
import {getUsers} from "./usersReducer";
import {isBooleanObject} from "util/types";

export type UserDataType = {
  id: number
  login: string
  email: string
}
type LoggedType = {logged: boolean}
export type AuthStateType = UserDataType & LoggedType
type ActionsType = ReturnType<typeof getUserData> | { type: 'ERROR' }

const GET_USER_DATA = 'GET_USER_DATA'

const initialState: AuthStateType = {
  id: -1,
  login: '',
  email: '',
  logged: false
}

const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case GET_USER_DATA:
      return {...state, logged: true, ...action.userData}
    case 'ERROR':
      return {...state}
    default:
      return {...state}
  }
}

export const getUserData = (userData: UserDataType) => ({type: GET_USER_DATA, userData} as const)

// export const authMe = (dispatch: Dispatch): ActionsType => {
//   authApi.me().then(data => {
//       if (data.resultCode === 0) {
//         return dispatch(getUserData(data.data))
//       } else {
//         return dispatch({type: 'ERROR'})
//       }
//     }
//   )
// }

export const authMe = () => (dispatch: Dispatch) => {
  authApi.me().then(res => {
    if (res.resultCode === 0) {
      dispatch(getUserData(res.data))
    }
  })
}

export default authReducer