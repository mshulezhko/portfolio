import React from 'react'
// import styles from './Profile.module.css'
import Profile from './Profile'
import { addPostCreator, updateNewPostText } from '../../redux/profile-reducer'

function ProfileContainer(props) {
    // debugger;
    let state = props.store.getState().profilePage

    function updatePostText(text) {
        return props.store.dispatch(updateNewPostText(text))
    }

    function addPost() {
        return props.store.dispatch(addPostCreator())

    }

    return <Profile updatePostText={updatePostText}
        newPostText={state.newPostText}
        addPost={addPost}
        posts={state.posts}
    />
}

export default ProfileContainer