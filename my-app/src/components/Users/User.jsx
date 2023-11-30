import React from "react"
import './users.css'
import userPhoto from '../../assets/images/user-icon.svg'
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

    return <div className='users-container'>
    {users.map(user => {
        return <div className='user-container' key={user.id}>
            <div className="user-information">
 <NavLink to={'/profile/' + user.id}> <img className='user-photo' src={user.photos.small ? user.photos.small : userPhoto} alt={user.name} /></NavLink>
            <div>
                {user.followed ?
                <button className='follow-unfolow-btn' disabled={followingInProgress?.some(id => id === user.id)} onClick={() => onUnfollowUser(user.id)}>Followed</button> :
                    <button className='follow-unfolow-btn' disabled={followingInProgress?.some(id => id === user.id)} onClick={() => onFollowUser(user.id)}>Unfollowed</button>
                }
            </div>
            </div>
            <div className='user-name-wrap'>
                 <h3 className='user-name'> {user.name}</h3>
                <p>{user.status ?user.status : `New user, you have common interests ${user.name} is also interested in web development👨‍💻👩‍💻`}</p>
                </div>
        </div>
    })}
    </div>
}

export default User