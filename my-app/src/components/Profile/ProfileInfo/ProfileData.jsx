import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileData = (props) => {
    const { profile } = props

    return <div className={styles.profileData}>
        <div><h1>{profile.fullName}</h1></div>
        <div><h3>About Me 📌</h3></div>
        <div>{profile.aboutMe}</div>
        <div>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div>{
            Object.keys(profile.contacts).map((key) => {
                return <div key={key}>{profile.contacts[key] ? `${key}: ` : ''} {profile.contacts[key] ?? ''}</div>
            })}
        </div>
    </div>
}

export default ProfileData