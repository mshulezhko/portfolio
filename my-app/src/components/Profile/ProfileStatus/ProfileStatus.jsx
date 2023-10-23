import React, { useState, useEffect } from 'react'
import styles from '../Profile.module.css'


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

    return <div className={styles.statusWrapper}>
        <h3>Status(click to change👇)</h3>
        <div>
            {!editMode ? <span onClick={activateEditMode} className={styles.status} >{status}</span> :
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={statusLocalState} />}

        </div>
    </div>
}

export default ProfileStatus