import React from "react";
import Profile from "./Profile";
import {ProfilePropsType} from "./ProfileContainer";

type PropsType = ProfilePropsType & { userId: number }

export class ProfileAPIContainer extends React.Component<PropsType> {

  componentDidUpdate(prevProps: Readonly<PropsType>,) {
    if(prevProps.userId !== this.props.userId){
      this.props.getProfileData(+this.props.userId)
    }
  }

  componentDidMount() {
    this.props.getProfileData(+this.props.userId)
  }
  render() {
    return <Profile {...this.props} />
  }
}

