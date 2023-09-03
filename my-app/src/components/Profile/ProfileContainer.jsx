// import React from 'react'
// import styles from './Profile.module.css'
import Profile from './Profile'
import { addPostCreator, updateNewPostText } from '../../redux/profile-reducer'
import { connect } from 'react-redux'

// function ProfileContainer(props) {
//     // debugger;
//     let state = props.store.getState().profilePage

//     function updatePostText(text) {
//         return props.store.dispatch(updateNewPostText(text))
//     }

//     function addPost() {
//         return props.store.dispatch(addPostCreator())

//     }

//     return <Profile updatePostText={updatePostText}
//         newPostText={state.newPostText}
//         addPost={addPost}
//         posts={state.posts}
//     />
// }

const mapStateToProps = (state) =>   {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => dispatch(updateNewPostText(text)),
        addPost: () => dispatch(addPostCreator())
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer