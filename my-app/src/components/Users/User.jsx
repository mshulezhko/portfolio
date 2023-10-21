import React from "react"
import styles from './users.module.css'
import userPhoto from '../../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom'

const User = (props) => {

    const {
        users,
        followingInProgress,
        unfollowUser,
        followUser
    } = props

    function onUnfollowUser(id) {
        unfollowUser(id)
    }

    function onFollowUser(id) {
        followUser(id)
    }

    return users.map(user => {
        return <div key={user.id}>
            <h1> {user.name}</h1>
            <div><h3>{user.status}</h3></div>
            <NavLink to={'/profile/' + user.id}> <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt={user.name} /></NavLink>
            <div>
                {user.followed ?
                <button disabled={followingInProgress?.some(id => id === user.id)} onClick={() => onUnfollowUser(user.id)}>Followed</button> :
                    <button disabled={followingInProgress?.some(id => id === user.id)} onClick={() => onFollowUser(user.id)}>Unfollowed</button>
                }
            </div>
        </div>
    })
}

export default User