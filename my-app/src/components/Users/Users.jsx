import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import styles from './users.module.css'
import userPhoto from '../../assets/imeges/pngtree-outline-user-icon-png-image_1727916.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    function unfollowUser(id) {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {withCredentials:true,
    headers:{
        "API-KEY": "83c57117-7fab-4acf-8089-4ab2e5a8a0ed"
    }}).then(response => {
        if(response.data.resultCode === 0) {
props.unfollow(id)
        }
    })
    }
    
    function followUser(id) {
       
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {withCredentials:true,
    headers:{
        "API-KEY": "83c57117-7fab-4acf-8089-4ab2e5a8a0ed"
    }}).then(response => {
        if(response.data.resultCode === 0) {
 props.follow(id)
        }
    })
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
                        {user.followed ? <button onClick={() => unfollowUser(user.id)}>Followed</button> :
                            <button onClick={() => followUser(user.id)}>Unfollowed</button>
                        }
                    </div>
                </div>
            })
        }
    
    </div>
}


export default Users