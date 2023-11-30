import React from 'react'
import './post.css'

const Post =(props)=> {
    const {id, message, likesCount} = props

    function deletePost(){
        alert('delete post ' +id)

    }

    return <div className='post-container'>
        <div>
        <p className='post-message'>{message}</p>
        <p className='post-likes'>likes: ❤️{likesCount}</p>
        </div>
        <button className='delete-post-btn' onClick={deletePost}>Delete</button>
    </div>
}


export default Post