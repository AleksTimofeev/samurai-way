import React from "react"
import {UserPagePropsType} from "./UsersPageContainer";
import UsersPage from "./UsersPage";
import PreLoader from "./PreLoader/PreLoader";
import {usersApi} from "../../api/api";


class UsersPageAPIContainer extends React.Component<UserPagePropsType, UserPagePropsType> {

  onChangeCurrentPage = (pageNumber: number) => {
    this.props.isFetchingUsers()
    this.props.changeCurrentPage(pageNumber)
    usersApi.getUsers(pageNumber)
      .then(data => {
        this.props.getUsers(data.items)
      })
  }

  componentDidMount() {
    this.props.isFetchingUsers()
    usersApi.getUsers(this.props.currentPage)
      .then(data => {
        this.props.getUsers(data.items)
        const numberPages: number = Math.round(data.totalCount / 10)
        this.props.setNumberPages(numberPages)
      })
  }

  render() {
    return <>{this.props.loadingUsers ?
      <PreLoader/> :
      <UsersPage
        getUsers={this.props.getUsers}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followUserOk={this.props.followUserOk}
        onChangeCurrentPage={this.onChangeCurrentPage}
        currentPage={this.props.currentPage}
        users={this.props.users}
        followProgress={this.props.followProgress}
      />}</>
  }
}

export default UsersPageAPIContainer