import React from 'react'
import styles from './Post.module.css'

const Post =(props)=> {
    const {id, message, likesCount} = props

    function deletePost(){
        alert('delete post ' +id)

    }

    return <div className={styles.postWrapper}>
        <h3 className={styles.postTitle}>{message}</h3>
        <p className={styles.likesCount}>likes: ❤️{likesCount}</p>
        <button className={styles.deletePostBtn} onClick={deletePost}>delete</button>
    </div>
}


export default Post