import React from 'react'
import { NavLink } from 'react-router-dom'

function DialogsItem(props) {
    const {id, name} = props
    return <>
    <div><NavLink to={'/dialog/'+ id}>{name}</NavLink></div>
    </>
}

export default DialogsItem