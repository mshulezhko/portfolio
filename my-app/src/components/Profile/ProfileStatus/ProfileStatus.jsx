import React, {useState} from 'react'


const ProfileStatus = (props) => {
    const [editMode, updateStateMode] = useState(false)

   const activateEditMode = () =>{
        // alert('ku')
        updateStateMode(true)
    }

    const deactivateEditMode = () => {
        updateStateMode(false)
    }

    return <div>
        <h1>STATUS</h1>
       <div>
        {!editMode ? <span onClick={activateEditMode} >{props.status}</span> :
        <input autoFocus='true' onBlur={deactivateEditMode} value={props.status} />}
        </div>
    </div>

}

export default ProfileStatus