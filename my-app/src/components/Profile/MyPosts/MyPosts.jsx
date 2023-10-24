import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
    const {posts} = props

    return <div>
        <h4 className={styles.myPostsTitle}>PUBLICATIONS</h4>
        { posts.map((post) => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/> )}
    </div>
}


export default MyPosts
