import React from 'react'
import styles from './users.module.css'
import axios from 'axios'


const Users = (props) => {
    if(props.users.length < 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
    }

    console.log('gvggggg')
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => console.log(response))

return <div>
   {
    props.users.map(user =>{
        return <div>
           <h1> {user.fullName}</h1>
           <img className={styles.userPhoto} src={user.photo} alt={user.fullName}/>
           <div>
            {user.followed ? <button  onClick={()=>props.unfollow(user.id)}>Followed</button> : 
            <button  onClick={() => props.follow(user.id)}>Unfollowed</button>
            }
            </div>
        </div>
    })
   }
</div>
}


export default Users