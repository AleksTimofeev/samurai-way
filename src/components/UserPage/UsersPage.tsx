import React, {useEffect, useState} from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import styles from './UserPage.module.css'
import axios from "axios";

const UsersPage: React.FC<UserPagePropsType> = (
  {users, currentPage, totalCount, numberPages, follow, unfollow,
    getUsers, setNumberPages, changeCurrentPage}
) => {

  const arrNumberPages = []
  let startNumberPages = 1
  if (currentPage > 3 ){
    startNumberPages = currentPage - 2
  }
  for (let i = startNumberPages ; arrNumberPages.length < 5 ; i++){
    arrNumberPages.push(i)
  }

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`)
      .then(response => {
        getUsers(response.data.items)
        const numberPages: number = Math.round(response.data.totalCount/10)
        setNumberPages(numberPages)
      })
  }, [currentPage])


  return (
    <div>
      <div>
        {arrNumberPages.map((item, i) => (
          <button className={item === currentPage ? styles.activePageButton : ''} onClick={() => changeCurrentPage(item)}>{item}</button>
        ))}
      </div>
      {
        users.map(user => (
          <div className={`${styles.userWrapper} ${user.followed ? styles.unfollowUser : styles.followUser}`} key={user.id}>
            <div>
              <p>{user.name}</p>
              {user.followed ?
                <button onClick={() => unfollow(user.id)}>unfollow</button> :
                <button onClick={() => follow(user.id)}>follow</button>}
            </div>
            <div>
              <p>{user.status || 'without status'}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default UsersPage;