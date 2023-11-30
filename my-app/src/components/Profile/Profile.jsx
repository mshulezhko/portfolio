import React from 'react'
import './profile.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import MyPostForm from './MyPosts/MyPostForm/MyPostForm';

const Profile = (props) => {
    const {
        profile,
        updateUserStatus,
        getUserStatus,
        status,
        addPost,
        posts,
        router: { params: { userId } },
        savePhoto,
        saveUserDataProfile
    } = props

    return <div className='profile-container'>
       <div className=''>
        <ProfileInfo
        userId={userId}
        profile={profile}
        savePhoto={savePhoto}
        saveUserDataProfile={saveUserDataProfile}
        />
        <ProfileStatus
            updateUserStatus={updateUserStatus}
            getUserStatus={getUserStatus}
            status={status}
            userId={userId}
        />
        </div>
        <MyPostForm addPost={addPost} />
        <MyPosts posts={posts} />
    </div>
}

export default Profile