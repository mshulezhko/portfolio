import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import Users from './Users'
import { withAuthRedirect } from '../../hos/withAuthRedirect'

import { 
    getUsersThunk,
    setPageThunk,
    unfollowUserThunk,
    followUserThunk
} from '../../redux/users-reducer'

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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id)=>{dispatch(follow(id))},
//         unfollow: (id) => {dispatch(unfollow(id))},
//         setUsers: (users) => {dispatch(setUsers(users))},
//         setTotalCount: (totalCount) => {dispatch(setTotalCount(totalCount))},
//         setPageSize: (setPageSize) => {dispatch(setPageSize(setPageSize))},
//         setCurrentPage: (setCurrentPage) => {dispatch(setCurrentPage(setCurrentPage))},
//         setFetching:(isFetching) => {dispatch(setFetching(isFetching))}
//     }
// }

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersT(this.props.currentPage, this.props.totalCount)
    }

    setPage = (page) => {
        this.props.setPageT(page, this.props.totalCount)
    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.users}
            setPage={this.setPage}
            followingInProgress={this.props.followingInProgress}
            unfollowUserT={this.props.unfollowUserT}
            followUserT={this.props.followUserT}
             />
    }
}


// const UserContainer = connect(mapStateToProps,
//     {
//         getUsersT: getUsersThunk,
//         setPageT: setPageThunk,
//         unfollowUserT: unfollowUserThunk,
//         followUserT: followUserThunk
//     })(UsersAPIComponent)

// export default UserContainer

export default compose(connect(mapStateToProps,
    {
        getUsersT: getUsersThunk,
        setPageT: setPageThunk,
        unfollowUserT: unfollowUserThunk,
        followUserT: followUserThunk
    }),
    withAuthRedirect
    )(UsersAPIComponent)