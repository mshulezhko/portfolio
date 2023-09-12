import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/imeges/pngtree-outline-user-icon-png-image_1727916.jpg'


const Users = (props) => {
    // debugger;
    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
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
                    <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt={user.name} />
                    <div>
                        {user.followed ? <button onClick={() => props.unfollow(user.id)}>Followed</button> :
                            <button onClick={() => props.follow(user.id)}>Unfollowed</button>
                        }
                    </div>
                </div>
            })
        }
    </div>
}


export default Users