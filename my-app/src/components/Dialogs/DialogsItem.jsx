import React from 'react'
import { NavLink } from 'react-router-dom'
import './dialogs.css'

function DialogsItem(props) {
    const {id, name} = props
    return <>
    <div><NavLink className='user-name' to={'/dialog/'+ id}>{name}</NavLink></div>
    </>
}

export default DialogsItem