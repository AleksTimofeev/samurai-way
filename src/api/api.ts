import axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "8ed048a9-5b01-4cf3-8598-4c1e9e24f244"
  }
})

type BaseResponseType<D = {}> = {
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
  data: D
}
type AuthMeResponseType = {
  id: number
  login: string
  email: string
}
export type ProfileDataType = {
  aboutMe: null | string
  contacts: {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
  },
  lookingForAJob: boolean
  lookingForAJobDescription: any
  fullName: string
  userId: number
  photos: {
    small: null | string
    large: null | string
  }
}

export const authApi = {
  me() {
    return instance.get<BaseResponseType<AuthMeResponseType>>('auth/me').then(res => res.data)
  }
}

export const profileApi = {
  getProfileData(userId: number) {
    return instance.get<ProfileDataType>(`profile/${userId}`).then(res => res.data)
  },
  getUserStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put<BaseResponseType>(`profile/status`, {status}).then(res => res.data)
  }
}

export const usersApi = {
  getUsers(currentPage: number) {
    return instance.get(`users?page=${currentPage}`).then(res => res.data)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  }
}