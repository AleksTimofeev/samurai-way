
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

    default: return {...state}
  }
}

export const getUserData = (userData: UserDataType) => ({type: GET_USER_DATA, userData} as const)

export default authReducer