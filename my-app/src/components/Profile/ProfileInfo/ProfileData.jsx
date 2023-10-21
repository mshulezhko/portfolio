import React from 'react'

const ProfileData = (props) => {
    const { profile } = props

    return <div>
        <div><h3>{profile.fullName}</h3></div>
        <div>{profile.aboutMe}</div>
        <div>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div>{
            Object.keys(profile.contacts).map((key) => {
                return <div>{profile.contacts[key] ? `${key}: ` : ''} {profile.contacts[key] ?? ''}</div>
            })}
        </div>
    </div>
}

export default ProfileData