import React from 'react'
// import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import MyPostForm from './MyPosts/MyPostForm/MyPostForm';

function Profile(props) {
    // debugger;

    // function updatePostText(e) {
    //     props.updatePostText(e.target.value)
    // }

    // function addPost() {
    //     props.addPost()

    // }

    return <div className='content'>
        {/* <textarea onChange={updatePostText} value={props.newPostText}></textarea>
        <button onClick={addPost} >add post</button> */}
        <ProfileInfo profile={props.profile} />
        <ProfileStatus
            updateUserStatus={props.updateUserStatus}
            getUserStatus={props.getUserStatus}
            status={props.status}
            userId={props.router.params.userId}
             />
             <MyPostForm addPost={props.addPost} />
        <MyPosts posts={props.posts} />
    </div>
}

export default Profile