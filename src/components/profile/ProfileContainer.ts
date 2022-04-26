import {Dispatch} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../redux/store";
import {
  addPostActionCreator, decrementLikesCountActionCreator,
  incrementLikesCountActionCreator,
  inputPostMessageActionCreator, ProfilePageType
} from "../redux/profileReducer";


type MapDispatchPropsType = {
  addPostActionCreator: () => void
  inputPostMessageActionCreator: (value: string) => void
  incrementLikesCountActionCreator: (idPost: string) => void
  decrementLikesCountActionCreator: (idPost: string) => void
}

export type ProfilePropsType = ProfilePageType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): ProfilePageType => state.profilePage

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    },
    inputPostMessageActionCreator: (value: string) => {
      dispatch(inputPostMessageActionCreator(value))
    },
    incrementLikesCountActionCreator: (idPost: string) => {
      dispatch(incrementLikesCountActionCreator(idPost))
    },
    decrementLikesCountActionCreator: (idPost: string) => {
      dispatch(decrementLikesCountActionCreator(idPost))
    }
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)