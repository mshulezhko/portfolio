import React from 'react'
// import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    // debugger;

    function updatePostText(e){
       props.updatePostText(e.target.value)
    }

function addPost(){
     props.addPost()

}

    return <div className='content'>
        <textarea onChange={updatePostText} value={props.newPostText}></textarea>
        <button onClick={addPost} >add post</button>
<ProfileInfo/>
<MyPosts posts={props.posts} />
    </div>
}

export default Profile