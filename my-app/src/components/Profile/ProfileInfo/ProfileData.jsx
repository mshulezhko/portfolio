import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileData = (props) => {
    const { profile } = props
    console.log(profile.contacts)

    return <div className={styles.profileData}>
        <div><h1>{profile.fullName}</h1></div>
        <div><h3>About Me 📌</h3></div>
        <div>{profile.aboutMe}</div>
        <div>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div className={styles.iconSocialMediaWrapper}>{
            Object.keys(profile.contacts).map((key) => {
                console.log(key)
                if (key === 'instagram') {
                    console.log(key + 'hhhhhhh')
                }

                switch (key) {
                    case 'instagram':
                        return <p key={key}>{profile.contacts[key]
                            ? <a target='_blank' rel="noreferrer" href={profile.contacts[key]} > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='socialMedia' id="instagram"><linearGradient id="a" x1="255.531" x2="255.531" y1="117.176" y2="406.065" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ea8928"></stop><stop offset="1" stopColor="#cf2b8f"></stop></linearGradient><path fill="url(#a)" d="M326.1 104.1H185c-47.9 0-86.9 39-86.9 86.9v141c0 47.9 39 86.9 86.9 86.9h141c47.9 0 86.9-39 86.9-86.9V191c0-47.9-38.9-86.9-86.8-86.9zm58.9 228c0 32.5-26.4 58.9-58.9 58.9H185c-32.5 0-58.9-26.4-58.9-58.9V191c0-32.5 26.4-58.9 58.9-58.9h141c32.5 0 58.9 26.4 58.9 58.9l.1 141.1z"></path><linearGradient id="b" x1="255.531" x2="255.531" y1="117.176" y2="406.065" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ea8928"></stop><stop offset="1" stopColor="#cf2b8f"></stop></linearGradient><path fill="url(#b)" d="M255.5 180.4c-44.7 0-81.1 36.4-81.1 81.1 0 44.7 36.4 81.1 81.1 81.1s81.1-36.4 81.1-81.1c0-44.7-36.3-81.1-81.1-81.1zm0 134.3c-29.3 0-53.2-23.9-53.2-53.2 0-29.3 23.9-53.2 53.2-53.2s53.2 23.9 53.2 53.2c0 29.4-23.8 53.2-53.2 53.2z"></path><linearGradient id="c" x1="340.043" x2="340.043" y1="117.176" y2="406.065" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ea8928"></stop><stop offset="1" stopColor="#cf2b8f"></stop></linearGradient><path fill="url(#c)" d="M340 156.7c-5.4 0-10.7 2.2-14.5 6-3.8 3.8-6 9.1-6 14.5s2.2 10.7 6 14.5c3.8 3.8 9.1 6 14.5 6s10.7-2.2 14.5-6c3.8-3.8 6-9.1 6-14.5s-2.2-10.7-6-14.5c-3.8-3.8-9.1-6-14.5-6z"></path></svg> </a>
                            : ''}</p>

                             case 'github':
                        return <p key={key}>{profile.contacts[key]
                            ? <a target='_blank' rel="noreferrer" href={profile.contacts[key]} > <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="github"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"></path></svg> </a>
                            : ''}</p>
                    default:
                        return ''
                }


            })}
        </div>
    </div>
}

export default ProfileData