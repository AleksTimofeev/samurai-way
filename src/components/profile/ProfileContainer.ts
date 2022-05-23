import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
  addPostActionCreator, decrementLikesCountActionCreator, getProfileData,
  incrementLikesCountActionCreator,
  inputPostMessageActionCreator, ProfileDataType, ProfilePageType, setProfileData
} from "../../redux/profileReducer";
import ProfileRouterContainer from "./ProfileRouterContainer";


type MapDispatchPropsType = {
  setProfileData: (profileData: ProfileDataType) => void
  getProfileData: (userId: number) => void
  addPostActionCreator: () => void
  inputPostMessageActionCreator: (value: string) => void
  incrementLikesCountActionCreator: (idPost: string) => void
  decrementLikesCountActionCreator: (idPost: string) => void
}

export type ProfilePropsType = ProfilePageType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): ProfilePageType => state.profilePage

const actions: MapDispatchPropsType = {
  setProfileData,
  getProfileData,
  addPostActionCreator,
  inputPostMessageActionCreator,
  incrementLikesCountActionCreator,
  decrementLikesCountActionCreator,
}

export const ProfileContainer = connect(mapStateToProps, actions)(ProfileRouterContainer)

