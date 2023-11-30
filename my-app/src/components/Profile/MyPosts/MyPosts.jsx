import React from 'react'
import  './my_posts.css'
import Post from './Post/Post'


function MyPosts(props) {
    const {posts} = props

    return <div>
        <h4>PUBLICATIONS</h4>
        { posts.map((post) => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/> )}
    </div>
}


export default MyPosts
