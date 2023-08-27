import React from 'react'
import { NavLink } from 'react-router-dom'

function DialogsItem(props) {
    return <>
    <div><NavLink to={'/dialog/'+ props.id}>{props.name}</NavLink></div>
    </>
}

export default DialogsItem