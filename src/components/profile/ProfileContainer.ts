import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
  addPostActionCreator, decrementLikesCountActionCreator, getProfileData,
  incrementLikesCountActionCreator,
  inputPostMessageActionCreator, ProfilePageType, updateStatus
} from "../../redux/profileReducer";
import ProfileRouterContainer from "./ProfileRouterContainer";


type MapDispatchPropsType = {
  getProfileData: (userId: number) => void
  updateStatus: (status: string) => void
  addPostActionCreator: () => void
  inputPostMessageActionCreator: (value: string) => void
  incrementLikesCountActionCreator: (idPost: string) => void
  decrementLikesCountActionCreator: (idPost: string) => void

}

export type ProfilePropsType = ProfilePageType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): ProfilePageType => state.profilePage

const actions: MapDispatchPropsType = {
  getProfileData,
  updateStatus,
  addPostActionCreator,
  inputPostMessageActionCreator,
  incrementLikesCountActionCreator,
  decrementLikesCountActionCreator,
}

export const ProfileContainer = connect(mapStateToProps, actions)(ProfileRouterContainer)

