import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from './Users'
import { withAuthRedirect } from '../../hos/withAuthRedirect'

import {
    getUsersThunk,
    setPage,
    unfollowUser,
    followUser
} from '../../redux/users-reducer'
import withRouter from '../Profile/withRouter'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersAPIComponent = (props) => {
    let { users } = props
    let followedUsers = []

    useEffect(() => {
        let totalCountOnPage = 10
        props.getUsers(props.currentPage, totalCountOnPage)

        // eslint-disable-next-line
    }, [props.currentPage])

    const setPage = (page) => {
        let totalCountOnPage = 10
        props.setPage(page, totalCountOnPage)
    }

    const getFollowedUsers = () => {
        users.map(user => {
            if (user.followed) {
                followedUsers.push(user)
            }

            return followedUsers
        })

    }

    if (props.router.location.pathname === "/my-friends") {
        getFollowedUsers()
        users = followedUsers

        return <Users
            users={users}
            setPage={setPage}
            followingInProgress={props.followingInProgress}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
        />
    }

    return <Users
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        users={users}
        setPage={setPage}
        followingInProgress={props.followingInProgress}
        unfollowUser={props.unfollowUser}
        followUser={props.followUser}
        pathname={props.router.location.pathname}
    />

}

export default compose(connect(mapStateToProps,
    {
        getUsers: getUsersThunk,
        setPage: setPage,
        unfollowUser: unfollowUser,
        followUser: followUser
    }),
    withAuthRedirect,
    withRouter
)(UsersAPIComponent)