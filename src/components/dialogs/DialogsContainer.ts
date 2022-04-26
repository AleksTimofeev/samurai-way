import {AppStateType} from "../redux/store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageDialogActionCreator, DialogsPageType, newMessageActionCreator} from "../redux/dialogsReducer";
import {Dispatch} from "redux";

type MapDispatchPropsType = {
  newMessageActionCreator: (payload: string) => void
  addMessageDialogActionCreator: () => void
}

export type DialogsPropsType = MapDispatchPropsType & DialogsPageType

const mapStateToProps = (state: AppStateType): DialogsPageType => state.dialogsPage
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    newMessageActionCreator: (payload: string) => {
      dispatch(newMessageActionCreator(payload))
    },
    addMessageDialogActionCreator: () => {
      dispatch(addMessageDialogActionCreator())
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)