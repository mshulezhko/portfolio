import React from 'react'
// import styles from './Profile.module.css'
import Profile from './Profile'
import { addPostCreator, updateNewPostText,setUserProfile } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import withRouter from './withRouter'

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
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => dispatch(updateNewPostText(text)),
        addPost: () => dispatch(addPostCreator()),
        setUserProfile:(profile)=> dispatch(setUserProfile(profile))
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            }).catch((error) => {
        console.log(error)
    })
    }

    render() {
        return <Profile posts={this.props.posts} profile={this.props.profile} newPostText={this.props.newPostText} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))