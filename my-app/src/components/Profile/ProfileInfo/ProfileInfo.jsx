import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import defaultPhoto from '../../../assets/images/user-icon.png'
import ProfileDataFormEdit from './ProfileDataFormEdit'
import ProfileData from './ProfileData'


function ProfileInfo(props){
    const {profile, userId, savePhoto, saveUserDataProfile} = props

    const [editMode, setEditMode] = useState(false)
    // debugger
    
    if(!profile) {
        return Preloader
    }

    const onMainPhotoSelected = (e) =>{
       savePhoto(e.target.files[0])
    }

    console.log(profile)

    const setEditModeUpdate = (value) => {
        setEditMode(value)
    }

// debugger
    return <div className='profile_info'>
        <div><img src={props.profile.photos.large || defaultPhoto} alt="profile_info" /></div>
        {!userId && <div><input onChange={onMainPhotoSelected} type='file' /></div>}
      {editMode ? 
      <ProfileDataFormEdit
      initialValues={profile}
      saveUserDataProfile={saveUserDataProfile}
      setEditModeUpdate={setEditModeUpdate}
      /> : 
      <ProfileData profile={profile} />}
        {(!userId && !editMode) &&
        <button onClick={()=>{setEditModeUpdate(true)}}>Update data</button>}
    </div>
}

export default ProfileInfo