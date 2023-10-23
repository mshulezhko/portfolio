import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import styles from './Users.module.css'

const Users = (props) => {

    return <div className={styles.usersWrapper}>
        {props.isFetching ? <Preloader /> : null}
        <Paginator
            totalCount={props.totalCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            setPage={props.setPage}
        />
        <User
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            users={props.users}
            followingInProgress={props.followingInProgress}
        />
    </div>
}


export default Users