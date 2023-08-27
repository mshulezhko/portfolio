import React from 'react'
// import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    let newPostElementRef = React.createRef()

    function addPost() {
        let text = newPostElementRef.current.value
        alert(text)
    }

    return <div className='content'>
        <textarea ref={newPostElementRef}></textarea>
        <button onClick={addPost} >add post</button>
<ProfileInfo/>
<MyPosts postsInfo={props.postsInfo} />
    </div>
}

export default Profile