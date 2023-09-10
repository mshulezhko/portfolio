import React from 'react'
import axios from 'axios'
import styles from './users.module.css'
import userPhoto from '../../assets/imeges/pngtree-outline-user-icon-png-image_1727916.jpg'


class UsersClass extends React.Component {
    constructor(props) {
        super(props)

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => props.setUsers(response.data.items))
    }

    render() {
        console.log( this.props)
        return <div>
   {
    this.props.users.map(user =>{
        console.log(user)
        return <div key={user.id}>
           <h1> {user.name}</h1>
           <div><h3>{user.status}</h3></div>
           <img className={styles.userPhoto} src={user.photos.small ? user.photos.small: userPhoto } alt={user.name}/>
           <div>
            {user.followed ? <button  onClick={()=>this.props.unfollow(user.id)}>Followed</button> : 
            <button  onClick={() => this.props.follow(user.id)}>Unfollowed</button>
            }
            </div>
        </div>
    })
   }
</div>
    }
}

export default UsersClass