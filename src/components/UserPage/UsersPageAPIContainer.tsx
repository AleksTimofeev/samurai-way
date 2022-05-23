import React from "react"
import {UserPagePropsType} from "./UsersPageContainer";
import UsersPage from "./UsersPage";
import PreLoader from "../PreLoader/PreLoader";


class UsersPageAPIContainer extends React.Component<UserPagePropsType, UserPagePropsType> {

  onChangeCurrentPage = (pageNumber: number) => {
    this.props.changeCurrentPageTC(pageNumber)
  }

  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage)
  }

  render() {
    return <>
      {this.props.loadingUsers ?
        <PreLoader/> :
        <UsersPage
          followTC={this.props.followTC}
          unfollowTC={this.props.unfollowTC}
          onChangeCurrentPage={this.onChangeCurrentPage}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followProgress={this.props.followProgress}
        />}
    </>
  }
}

export default UsersPageAPIContainer