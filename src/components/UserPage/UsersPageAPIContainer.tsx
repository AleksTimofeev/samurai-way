import React from "react"
import axios from "axios";
import {UserPagePropsType} from "./UsersPageContainer";
import UsersPage from "./UsersPage";
import PreLoader from "./PreLoader/PreLoader";


class UsersPageAPIContainer extends React.Component<UserPagePropsType, UserPagePropsType> {

  onChangeCurrentPage = (pageNumber: number) => {
    this.props.isFetching()
    this.props.changeCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`)
      .then(response => {
        this.props.getUsers(response.data.items)
      })
  }

  componentDidMount() {
    this.props.isFetching()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
      .then(response => {
        this.props.getUsers(response.data.items)
        const numberPages: number = Math.round(response.data.totalCount/10)
        this.props.setNumberPages(numberPages)
      })
  }

  render(){
    return <>{this.props.startLoader ?
      <PreLoader /> :
      <UsersPage
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      onChangeCurrentPage={this.onChangeCurrentPage}
      currentPage={this.props.currentPage}
      users={this.props.users}
    />}</>
  }
}

export default UsersPageAPIContainer