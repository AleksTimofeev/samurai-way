import {Dispatch} from "redux";
import axios from "axios";

export type HomePageType = {
title: string
}
export type HomePageActionType = ReturnType<typeof getTAC>

const initialState: HomePageType = {
title: 'Title'
}


const homePageReducer = (state = initialState, action: HomePageActionType) => {
  switch (action.type) {
    case "GET_T": return {...state, title: action.data}
    default:
      return state
  }
}

export const getTAC = (data: string) => ({type: 'GET_T', data} as const)
export const getT = () => (dispatch: Dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
      return dispatch(getTAC(res.data.title))
    })
}

export default homePageReducer
