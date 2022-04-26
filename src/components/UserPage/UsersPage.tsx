import React from 'react';
import {UserPagePropsType} from "./UsersPageContainer";
import styles from './UserPage.module.css'

const UsersPage: React.FC<UserPagePropsType> = ({users, follow, unfollow, getUsers}) => {
  return (
    <div>
      {
        users.map(user => (
          <div className={`${styles.userWrapper} ${user.followed ? styles.unfollowUser : styles.followUser}`} key={user.id}>
            <div>
              <p>{user.fullName}</p>
              {user.followed ?
                <button onClick={() => unfollow(user.id)}>unfollow</button> :
                <button onClick={() => follow(user.id)}>follow</button>}
            </div>
            <div>
              <p>{user.location.country}</p>
              <p>{user.location.city}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default UsersPage;