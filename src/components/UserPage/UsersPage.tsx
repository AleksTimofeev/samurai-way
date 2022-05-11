import React, {useEffect, useState} from 'react';

import styles from './UserPage.module.css'

import {UserType} from "../redux/usersReducer";
import {NavLink, useNavigate, useRoutes} from "react-router-dom";

type PropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onChangeCurrentPage: (pageNumber: number) => void
  users: Array<UserType>
  currentPage: number
}

const UsersPage: React.FC<PropsType> = ({users, currentPage, follow, unfollow, onChangeCurrentPage}) => {

  const arrNumberPages = []
  let startNumberPages = 1
  if (currentPage > 3) {
    startNumberPages = currentPage - 2
  }
  for (let i = startNumberPages; arrNumberPages.length < 5; i++) {
    arrNumberPages.push(i)
  }

  const navigate = useNavigate()

  const handleGoToProfileUser = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  return (
    <div>
      <div>
        {arrNumberPages && arrNumberPages.map((item, i) => (
          <button className={item === currentPage ? styles.activePageButton : ''}
                  onClick={() => onChangeCurrentPage(item)}>{item}</button>
        ))}
      </div>
      {
        users.map(user => (

          <div className={`${styles.userWrapper} ${user.followed ? styles.unfollowUser : styles.followUser}`}
               key={user.id}>
            <div>
              <p>{user.name}</p>
              {user.followed ?
                <button onClick={() => unfollow(user.id)}>unfollow</button> :
                <button onClick={() => follow(user.id)}>follow</button>}
            </div>
            <div>
              <p>{user.status || 'without status'}</p>
              <button onClick={() => handleGoToProfileUser(user.id)}>go to profile user</button>
            </div>
          </div>

        ))
      }
    </div>
  );
};

export default UsersPage;