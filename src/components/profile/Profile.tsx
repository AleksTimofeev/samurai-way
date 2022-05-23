import React, {useEffect} from 'react';
import styles from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfilePropsType} from "./ProfileContainer";
import PreLoader from "../PreLoader/PreLoader";


const Profile: React.FC<ProfilePropsType> = (props) => {
  const {loadingProfileData} = props
  const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, photos, userId, contacts} = props.profileData

  const photoUrl = photos.large || photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LFeb4jspw2truDvJVg5Wzj3TflskRenc1A&usqp=CAU'

  return (
    <div className={styles.wrapper}>

      {loadingProfileData ?
        <PreLoader /> : <>
        <img src={photoUrl} width={'150px'} alt={'userPhoto'}/>
        <h2>{fullName}</h2>
        <span>About me - - - {aboutMe || '*_*'}</span>
      </>}

      <MyPosts
        inputPostMessageActionCreator={props.inputPostMessageActionCreator}
        addPostActionCreator={props.addPostActionCreator}
        incrementLikesCountActionCreator={props.incrementLikesCountActionCreator}
        decrementLikesCountActionCreator={props.decrementLikesCountActionCreator}
        inputPostMessage={props.inputPostMessage}
        posts={props.posts}/>
    </div>
  );
};

export default Profile;