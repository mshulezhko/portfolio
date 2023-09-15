import React from 'react'
import Preloader from '../../common/Preloader/Preloader'


function ProfileInfo(props){
    if(!props.profile) {
        return Preloader
    }

// debugger
    return <div className='profile_info'>
        <div><img src={props.profile.photos.large} alt="profile_info" /></div>
      <div> {props.profile.aboutMe}</div>
    </div>
}

export default ProfileInfo