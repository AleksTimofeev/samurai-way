import {AnyAction, Dispatch} from "redux";
import {authApi} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {Action} from "redux-ts";
import {AnyAaaaRecord} from "dns";
import {getUsers} from "./usersReducer";

export type UserDataType = {
  id: string | null
  login: string | null
  email: string | null
  logged: boolean
}
type ActionsType = ReturnType<typeof getUserData>

const GET_USER_DATA = 'GET_USER_DATA'

const initialState: UserDataType = {
  id: null,
  login: null,
  email: null,
  logged: false
}

const authReducer = (state = initialState, action: ActionsType): UserDataType => {
  switch (action.type) {
    case GET_USER_DATA:
      return {...state, ...action.userData, logged: true}
    default:
      return {...state}
  }
}

export const getUserData = (userData: UserDataType) => ({type: GET_USER_DATA, userData} as const)
export const authMe = () => (dispatch: Dispatch) => {
  authApi.me().then(data => {
      if (data.resultCode === 0) {
        dispatch(getUserData(data.data))
      }
    }
  )
}

export default authReducer