import React from 'react'

function Post(props) {

    function deletePost(){
        alert('delete post')
    }

    return <div>
        <h3>{props.name}</h3>
        <p>{props.text}</p>

<button onClick={deletePost}>delete</button>
    </div>
}


export default Post