import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import Users from './Users'
import { withAuthRedirect } from '../../hos/withAuthRedirect'

import { 
    getUsersThunk,
    setPage,
    unfollowUser,
    followUser
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

const UsersAPIComponent = (props) => {
    // debugger


    useEffect(()=> {
        console.log('use eff')
        props.getUsersT(props.currentPage, props.totalCount)

 // eslint-disable-next-line
    },[props.currentPage])

    const setPage = (page) => {
        console.log(page)
        props.setPage(page, props.totalCount)
    }


        return <Users
            totalCount={props.totalCount}
            currentPage={props.currentPage}
            pageSize={props.pageSize}
            users={props.users}
            setPage={setPage}
            followingInProgress={props.followingInProgress}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
             />
    
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
        setPage: setPage,
        unfollowUser: unfollowUser,
        followUser: followUser
    }),
    withAuthRedirect
    )(UsersAPIComponent)