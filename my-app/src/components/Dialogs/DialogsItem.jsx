import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

function DialogsItem(props) {
    const {id, name} = props
    return <>
    <div><NavLink className={styles.dialogUserName} to={'/dialog/'+ id}>{name}</NavLink></div>
    </>
}

export default DialogsItem