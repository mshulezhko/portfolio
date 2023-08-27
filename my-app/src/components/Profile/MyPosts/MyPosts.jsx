import React from 'react'
// import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {

    return <div className='my_posts'>
        my_posts hello
        { props.postsInfo.map((post) => <Post name={post.name} text={post.text} /> )}
    </div>
}


export default MyPosts
