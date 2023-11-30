import React, { useState, useEffect } from 'react'
import '../profile.css'


const ProfileStatus = (props) => {
    const {
        status,
        updateUserStatus,
        userId
    } = props

    const [editMode, updateStateMode] = useState(false)
    const [statusLocalState, updateStateStatus] = useState(status)

    const activateEditMode = () => {
        updateStateMode(true)
    }

    const deactivateEditMode = () => {
        updateStateMode(false)
        updateUserStatus(statusLocalState)
    }

    const onStatusChange = (e) => {
        updateStateStatus(e.currentTarget.value)
    }



    useEffect(() => {
        ///synchronize local state and global
        updateStateStatus(status)
    }, [status]);


    if(userId) {
        return <span >Status: {status}</span>
    }

    return <div className='status-wrap'>
        <h3>Status<span>(click to change👇)</span></h3>
        <div className='status-input-wrap'>
            {!editMode ? <span className='status' onClick={activateEditMode} >{status}</span> :
                <input className='status-input' autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={statusLocalState} />}

        </div>
    </div>
}

export default ProfileStatus