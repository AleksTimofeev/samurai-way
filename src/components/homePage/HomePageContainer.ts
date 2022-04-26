import {connect} from "react-redux";
import HomePage from "./HomePage";
import {AppStateType} from "../redux/store";
import {addOne, addThree, addTwo, changeText, HomePageType} from "../redux/homePageReducer";
import {Dispatch} from "redux";

type MapDispatchPropsType = {
  one: () => void
  two: () => void
  three: () => void
  changeText: (value: string) => void
}

const mapStateToProps = (state: AppStateType): HomePageType => state.homePage

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    one: () => {
      dispatch(addOne())
    },
    two: () => {
      dispatch(addTwo())
    },
    three: () => {
      dispatch(addThree())
    },
    changeText: (value) => {
      dispatch(changeText(value))
    }
  }
}

export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)