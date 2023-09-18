import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import styles from './users.module.css'
import userPhoto from '../../assets/imeges/pngtree-outline-user-icon-png-image_1727916.jpg'
import { NavLink } from 'react-router-dom'


const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    function unfollowUser(id) {
        props.unfollowUserT(id)
    }
    
    function followUser(id) {
        props.followUserT(id)
    }

    return <div>
        { props.isFetching ? <Preloader /> : null}
        <div>
            {pages.map(page => {
                return <span
                    className={page === props.currentPage && styles.currentPage}
                    onClick={() => { props.setPage(page) }}
                >{page}</span>
            })}
        </div>
        {
                props.users.map(user => {
                return <div key={user.id}>
                    <h1> {user.name}</h1>
                    <div><h3>{user.status}</h3></div>
                   <NavLink to={'/profile/' + user.id}> <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt={user.name} /></NavLink>
                    <div>
                        {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => unfollowUser(user.id)}>Followed</button> :
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => followUser(user.id)}>Unfollowed</button>
                        }
                    </div>
                </div>
            })
        }
    
    </div>
}


export default Users