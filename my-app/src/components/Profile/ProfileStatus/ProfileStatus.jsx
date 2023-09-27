import React, {useState, useEffect} from 'react'


const ProfileStatus = (props) => {
    // debugger
    const [editMode, updateStateMode] = useState(false)
    const[status, updateStateStatus] = useState(props.status)
    // alert(props.status)

   const activateEditMode = () =>{
        // alert('ku')
        updateStateMode(true)
    }

    const deactivateEditMode = () => {
        updateStateMode(false)
         props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        // console.log(e.currentTarget.value)
        // debugger
        updateStateStatus(e.currentTarget.value)
       
    }



       useEffect(() => {
        ///синхронізую локал стайт і глобал
        console.log('useefect' + props.status)
    // props.updateUserStatus(props.status)
    updateStateStatus(props.status)
    //   props.getUserStatus(props.userId)
    //   console.log(props.getUserStatus(props.userId))
    //    console.log(props.userId)
  }, [props.status]);
    // <p>{props.getUserStatus(props.userId)}</p>

    return <div>
        <h1>STATUS</h1>
       <div>
        {!editMode ? <span onClick={activateEditMode} >{props.status}</span> :
        <input autoFocus='true' onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />}
      
        </div>
    </div>

}

export default ProfileStatus