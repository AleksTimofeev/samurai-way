import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/store";
import {follow, getUsers, unfollow, UsersPageType, UserType} from "../redux/usersReducer";

type MapDispatchPropsType = {
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  getUsers: (users: Array<UserType>) => void
}
export type UserPagePropsType = MapDispatchPropsType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => state.usersPage

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId) => {
      dispatch(follow(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId))
    },
    getUsers: (users) => {
      dispatch(getUsers(users))
    }
  }
}


export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)