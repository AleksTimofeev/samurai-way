export type HomePageType = {
  value_01: string
  value_02: string
  value_03: string
  text: string
}
export type HomePageActionType = ReturnType<typeof addOne> |
  ReturnType<typeof addTwo> |
  ReturnType<typeof addThree> |
  ReturnType<typeof changeText>

const initialState: HomePageType = {
  value_01: 'value 001',
  value_02: 'value 002',
  value_03: 'value 003',
  text: ''
}


const homePageReducer = (state = initialState, action: HomePageActionType) => {
  switch (action.type) {
    case "ADD_ONE":
      return {...state, value_01: 'new value 001'}
    case "ADD_TWO":
      return {...state, value_02: 'new value 002'}
    case "ADD_THREE":
      return {...state, value_03: 'new value 003'}
    case "CHANGE_TEXT":
      return {...state, text: action.value}
    default:
      return state
  }
}
export default homePageReducer
export const addOne = () => ({type: 'ADD_ONE'} as const)
export const addTwo = () => ({type: 'ADD_TWO'} as const)
export const addThree = () => ({type: 'ADD_THREE'} as const)
export const changeText = (value: string) => ({type: 'CHANGE_TEXT', value} as const)