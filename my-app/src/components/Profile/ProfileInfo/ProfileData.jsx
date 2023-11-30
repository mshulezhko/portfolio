import React from 'react';

import '../../common/styles_base.css'
import './profile-info.css'

const ProfileData = (props) => {
    const { profile } = props

    return <div className='container-profile-data'>
        <div><h1 className='profile-data-title-main'>{profile.fullName}</h1></div>
        <div><h3 className='profile-data-title'>About Me 📌</h3></div>
        <div><p className='profile-data-text'>{profile.aboutMe}</p></div>
        <div className='profile-data-text'>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div className='profile-data-text'>{profile.lookingForAJobDescription}</div>

        <div className='profile-data-links'>{
            Object.keys(profile.contacts).map((key) => {
                switch (key) {
                    case 'instagram':
                        return <p key={key}>{profile.contacts[key]
                            ? <a className='profile-data-link' target='_blank' rel="noreferrer" href={profile.contacts[key]} >
                                <i class="fa fa-linkedin icon-network"></i></a>
                            : ''}</p>

                    case 'github':
                        return <p key={key}>{profile.contacts[key]
                            ? <a className='profile-data-link' target='_blank' rel="noreferrer" href={profile.contacts[key]} >
                                <i class="fa fa-github icon-network"></i>  </a> : ''}</p>
                    default:
                        return ''
                }


            })}
        </div>
    </div>
}

export default ProfileData