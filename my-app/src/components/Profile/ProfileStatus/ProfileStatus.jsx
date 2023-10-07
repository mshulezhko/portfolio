import React, { useState, useEffect } from 'react'


const ProfileStatus = (props) => {
    const {
        status,
        updateUserStatus

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
        ///синхронізую локал стайт і глобал
        updateStateStatus(status)
    }, [status]);


    return <div>
        <h1>STATUS</h1>
        <div>
            {!editMode ? <span onClick={activateEditMode} >{status}</span> :
                <input autoFocus='true' onChange={onStatusChange} onBlur={deactivateEditMode} value={statusLocalState} />}

        </div>
    </div>
}

export default ProfileStatus