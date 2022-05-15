import axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "8ed048a9-5b01-4cf3-8598-4c1e9e24f244"
  }
})

export const usersApi = {
  getUsers (currentPage: number) {
    return instance.get(`users?page=${currentPage}`).then(res => res.data)
  },
  follow(userId: number){
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number){
    return instance.delete(`follow/${userId}`)
  }
}