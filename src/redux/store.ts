import {combineReducers, createStore, compose, applyMiddleware, AnyAction} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import homePageReducer from "./homePageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  homePage: homePageReducer,
  usersPage: usersReducer,
  auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType,unknown,AnyAction> & AppDispatch>()
export type AppDispatch = typeof store.dispatch

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
