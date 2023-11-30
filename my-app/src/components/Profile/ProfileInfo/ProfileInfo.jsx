import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import defaultPhoto from '../../../assets/images/user-icon.svg'
import ProfileDataFormEdit from './ProfileDataFormEdit'
import ProfileData from './ProfileData';
import './../../common/styles_base.css'
import './profile-info.css'


function ProfileInfo(props) {
    const { profile, userId, savePhoto, saveUserDataProfile } = props

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return Preloader
    }

    const onMainPhotoSelected = (e) => {
        savePhoto(e.target.files[0])
    }

    const setEditModeUpdate = (value) => {
        setEditMode(value)
    }

    return <div className='container-profile-info'>
        <div className='container-profile-img'>
            <img className='profile-info-img' src={props.profile.photos.large || defaultPhoto} alt="profile_info" />
    {!userId && <div class="file-input"><input className='file' onChange={onMainPhotoSelected} type='file' id="file" />
    <label for="file">
    Select new photo
    <p class="file-name"></p>
  </label>
    </div>}
        </div>
<div>
        {editMode ?
            <ProfileDataFormEdit
                initialValues={profile}
                saveUserDataProfile={saveUserDataProfile}
                setEditModeUpdate={setEditModeUpdate}
            /> :
            <ProfileData profile={profile} />}
        {(!userId && !editMode) &&
            <button className='profile-update-btn' onClick={() => { setEditModeUpdate(true) }}>Update data</button>}
            </div>
    </div>
}

export default ProfileInfo