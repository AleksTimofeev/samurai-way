import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/store";
import {
  changeCurrentPage,
  follow,
  getUsers,
  setNumberPages,
  unfollow,
  UsersPageType,
  UserType
} from "../redux/usersReducer";

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (users: Array<UserType>) => void
  changeCurrentPage: (pageNumber: number) => void
  setNumberPages : (numberPages: number) => void
}
export type UserPagePropsType = MapDispatchPropsType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => state.usersPage

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId) => dispatch(follow(userId)),
    unfollow: (userId) => dispatch(unfollow(userId)),
    getUsers: (users) => dispatch(getUsers(users)),
    changeCurrentPage: (pageNumber) => dispatch(changeCurrentPage(pageNumber)),
    setNumberPages : (numberPages) => dispatch(setNumberPages(numberPages)),
  }
}


export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)