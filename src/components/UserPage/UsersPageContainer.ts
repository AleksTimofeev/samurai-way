import {connect} from "react-redux";
import {AppStateType} from "../redux/store";
import {
  changeCurrentPage,
  follow, followUserOk,
  getUsers, isFetchingUsers,
  setNumberPages,
  unfollow,
  UsersPageType,
  UserType
} from "../redux/usersReducer";
import UsersPageAPIContainer from "./UsersPageAPIContainer";

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followUserOk: (userId: number) => void
  getUsers: (users: Array<UserType>) => void
  changeCurrentPage: (pageNumber: number) => void
  setNumberPages : (numberPages: number) => void
  isFetchingUsers : () => void
}
export type UserPagePropsType = MapDispatchPropsType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => state.usersPage

const actions: MapDispatchPropsType = {
  follow, unfollow, followUserOk, getUsers, changeCurrentPage, setNumberPages, isFetchingUsers
}

export const UsersPageContainer = connect(mapStateToProps, actions)(UsersPageAPIContainer)