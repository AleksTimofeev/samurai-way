import React, {ChangeEvent} from 'react';
import styles from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfilePropsType} from "./ProfileContainer";
import PreLoader from "../PreLoader/PreLoader";


class Profile extends React.Component<ProfilePropsType, { status: string, showInputChangeStatus: boolean }> {
  constructor(props: ProfilePropsType) {
    super(props);
    this.state = {
      status: this.props.userStatus,
      showInputChangeStatus: false
    }
  }

  // const {loadingProfileData} = props
  // const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, photos, userId, contacts} = props.profileData
  //

  photoProfile = () => {
    let photo = this.props.profileData.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LFeb4jspw2truDvJVg5Wzj3TflskRenc1A&usqp=CAU'
    return photo
  }
  handleOnChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  }

  handleOnBlurStatus = () => {
    this.setState({showInputChangeStatus: false})
    this.state.status && this.props.updateStatus(this.state.status)
  }

  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{ status: string }>, snapshot?: any) {


  }

  componentDidMount() {

    this.setState({status: this.props.userStatus})
  }

  render() {

    return (
      <div className={styles.wrapper}>

        {this.props.loadingProfileData ?
          <PreLoader/> : <>
            <img src={this.photoProfile()} width={'150px'} alt={'userPhoto'}/>
            <h2>{this.props.profileData.fullName}</h2>
            {this.state.showInputChangeStatus ? <input
                autoFocus={true}
                type={"text"}
                value={this.state.status}
                onChange={this.handleOnChangeStatus}
                onBlur={this.handleOnBlurStatus}/> :
              <span className={styles.editableSpan}
                    onDoubleClick={() => this.setState({showInputChangeStatus: true})}>- - - {this.props.userStatus || '*_*'}</span>}
          </>}

        <MyPosts
          inputPostMessageActionCreator={this.props.inputPostMessageActionCreator}
          addPostActionCreator={this.props.addPostActionCreator}
          incrementLikesCountActionCreator={this.props.incrementLikesCountActionCreator}
          decrementLikesCountActionCreator={this.props.decrementLikesCountActionCreator}
          inputPostMessage={this.props.inputPostMessage}
          posts={this.props.posts}/>
      </div>
    );
  }
};

export default Profile;


// const Profile: React.FC<ProfilePropsType> = (props) => {
//   const {loadingProfileData} = props
//   const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription, photos, userId, contacts} = props.profileData
//
//   const photoUrl = photos.large || photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LFeb4jspw2truDvJVg5Wzj3TflskRenc1A&usqp=CAU'
//
//   return (
//     <div className={styles.wrapper}>
//
//       {loadingProfileData ?
//         <PreLoader /> : <>
//           <img src={photoUrl} width={'150px'} alt={'userPhoto'}/>
//           <h2>{fullName}</h2>
//           <span>About me - - - {aboutMe || '*_*'}</span>
//         </>}
//
//       <MyPosts
//         inputPostMessageActionCreator={props.inputPostMessageActionCreator}
//         addPostActionCreator={props.addPostActionCreator}
//         incrementLikesCountActionCreator={props.incrementLikesCountActionCreator}
//         decrementLikesCountActionCreator={props.decrementLikesCountActionCreator}
//         inputPostMessage={props.inputPostMessage}
//         posts={props.posts}/>
//     </div>
//   );
// };
//
// export default Profile;