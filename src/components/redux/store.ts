import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import homePageReducer from "./homePageReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  homePage: homePageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store