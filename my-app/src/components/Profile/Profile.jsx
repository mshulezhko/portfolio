import React from 'react'
// import styles from './Profile.module.css'
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

    return <div className='content'>
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
            // userId={props.router.params.userId}
            userId={userId}
        />
        <MyPostForm addPost={addPost} />
        <MyPosts posts={posts} />
    </div>
}

export default Profile