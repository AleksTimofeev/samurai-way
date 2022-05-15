import React from 'react';
import styles from './UserPage.module.css'
import {UserType} from "../redux/usersReducer";
import {useNavigate} from "react-router-dom";
import {usersApi} from "../../api/api";

type PropsType = {
  getUsers: (users: Array<UserType>) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followUserOk: (userId: number) => void
  onChangeCurrentPage: (pageNumber: number) => void
  users: Array<UserType>
  currentPage: number
  followProgress: Array<number>
}

const UsersPage: React.FC<PropsType> = ({
                                          users,
                                          currentPage,
                                          getUsers,
                                          follow,
                                          unfollow,
                                          followUserOk,
                                          onChangeCurrentPage,
                                          followProgress
                                        }) => {

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

  const followHandler = (userId: number) => {
    follow(userId)
    usersApi.follow(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          usersApi.getUsers(currentPage)
            .then(data => {
              getUsers(data.items)
              followUserOk(userId)
            })
        }
      })
  }
  const unfollowHandler = (userId: number) => {
    unfollow(userId)
    usersApi.unfollow(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          usersApi.getUsers(currentPage)
            .then(data => {
              getUsers(data.items)
              followUserOk(userId)
            })
        }
      })
  }


  return (
    <div>
      <div>
        {arrNumberPages && arrNumberPages.map((item, i) => (
          <button
            key={i + `${currentPage}`}
            className={item === currentPage ? styles.activePageButton : ''}
            onClick={() => onChangeCurrentPage(item)}>{item}</button>
        ))}
      </div>
      {
        users.map(user => (

          <div className={`${styles.userWrapper} ${user.followed ? styles.unfollowUser : styles.followUser}`}
               key={user.id}>
            <div className={styles.userPhotoContainer}>
              <img src={`${
                user.photos.large ||
                user.photos.small ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LFeb4jspw2truDvJVg5Wzj3TflskRenc1A&usqp=CAU'}`
              } alt={'userPhoto'}/>
            </div>
            <div>
              <p>{user.name}</p>
              {user.followed ?
                <button
                  disabled={followProgress.some(userId => userId === user.id)}
                  onClick={() => unfollowHandler(user.id)
                  }>unfollow
                </button> :
                <button
                  disabled={followProgress.some(userId => userId === user.id)}
                  onClick={() => followHandler(user.id)
                  }>follow
                </button>}
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