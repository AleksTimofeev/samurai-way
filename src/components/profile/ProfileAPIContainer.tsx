import React from "react";
import Profile from "./Profile";
import {ProfilePropsType} from "./ProfileContainer";
import axios from "axios";
type PropsType = ProfilePropsType & {userId: string}

export class ProfileAPIContainer extends React.Component<PropsType>{


  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`,)
      .then(response => {
        this.props.setProfileData(response.data)
      })
  }

  render(){
    return <Profile {...this.props} />
  }
}

