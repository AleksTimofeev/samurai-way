import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
  changeCurrentPageTC,
   followTC,
  getUsersTC, isFetchingUsers,
  setNumberPages,
   unfollowTC,
  UsersPageType,
} from "../../redux/usersReducer";
import UsersPageAPIContainer from "./UsersPageAPIContainer";

type MapDispatchPropsType = {
  followTC: (userId: number, currentPage: number) => void
  unfollowTC: (userId: number, currentPage: number) => void
  getUsersTC: (currentPage: number) => void
  changeCurrentPageTC: (pageNumber: number) => void
  setNumberPages : (numberPages: number) => void
  isFetchingUsers : () => void
}
export type UserPagePropsType = MapDispatchPropsType & UsersPageType

const mapStateToProps = (state: AppStateType): UsersPageType => state.usersPage

const actions: MapDispatchPropsType = {
  getUsersTC, changeCurrentPageTC, setNumberPages, isFetchingUsers, followTC, unfollowTC
}

export const UsersPageContainer = connect(mapStateToProps, actions)(UsersPageAPIContainer)