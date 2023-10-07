import React, {useEffect} from 'react'
// import styles from './Profile.module.css'
import Profile from './Profile'
import { addPostCreator, getUsersPRofileT, getUserStatusT, updateUserStatusT } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import withRouter from './withRouter'
import { withAuthRedirect } from '../../hos/withAuthRedirect'
import { compose } from 'redux'

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

const ProfileContainer = (props) => {
    useEffect(()=>{
        console.log('use-eff')
         let userId = props.router.params.userId
        if (userId) {
            props.getUsersPRofileT(userId)
            props.getUserStatus(userId)
        } else if (props.authUserId) {
            props.getUsersPRofileT(props.authUserId)
            props.getUserStatus(props.authUserId)
        }
        // eslint-disable-next-line
    }, [])

  return <Profile {...props} />
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)