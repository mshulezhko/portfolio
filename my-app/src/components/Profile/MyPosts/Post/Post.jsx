import React from 'react'

const Post =(props)=> {
    const {message, likesCount} = props

    function deletePost(){
        alert('delete post')
    }

    return <div>
        <h3>{message}</h3>
        <p>{likesCount}</p>
        <button onClick={deletePost}>delete</button>
    </div>
}


export default Post