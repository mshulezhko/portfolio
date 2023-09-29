import React from 'react'
// import styles from './Profile.module.css'
import Profile from './Profile'
import { addPostCreator, getUsersPRofileT, getUserStatusT, updateUserStatusT } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import withRouter from './withRouter'
import { withAuthRedirect } from '../../hos/withAuthRedirect'
import { compose } from 'redux'
// import { Navigate } from 'react-router-dom';


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

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (new_post) => dispatch(addPostCreator(new_post)),
        getUsersPRofileT: (profile) => dispatch(getUsersPRofileT(profile)),
        getUserStatus: (userId) => dispatch(getUserStatusT(userId)),
        updateUserStatus: (status) => dispatch(updateUserStatusT(status))
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (userId) {
            this.props.getUsersPRofileT(userId)
            this.props.getUserStatus(userId)
        } else if (this.props.authUserId) {
            this.props.getUsersPRofileT(this.props.authUserId)
            this.props.getUserStatus(this.props.authUserId)
        }
    }

    render() {
        console.log(this.props.authUserId)
        console.log('this.props.authUserId')

        // if (this.props.authUserId) {
        //     return <Navigate to={'/profile/' + this.props.authUserId} />
        // }


        return <Profile {...this.props} />
    }
}


// const AuthRedirectProfileContainer = withAuthRedirect(ProfileContainer)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirectProfileContainer))

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)