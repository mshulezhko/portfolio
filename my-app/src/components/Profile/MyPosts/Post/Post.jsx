import React from 'react'

function Post(props) {

    function deletePost(){
        alert('delete post')
    }

    return <div>
        <h3>{props.message}</h3>
        <p>{props.likesCount}</p>

<button onClick={deletePost}>delete</button>
    </div>
}


export default Post