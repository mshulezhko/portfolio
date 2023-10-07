import React from 'react'
// import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
    const {posts} = props

    return <div className='my_posts'>
        my_posts hello
        { posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/> )}
    </div>
}


export default MyPosts
