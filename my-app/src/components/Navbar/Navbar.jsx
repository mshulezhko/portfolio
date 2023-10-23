import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return <div className='nav'>
        <div className={classes.navElementBlock}>
            <NavLink to="/profile" className={(navData) => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
        </div>
        <div className={classes.navElementBlock}>
            <NavLink to="/users" className={(navData) => navData.isActive ? classes.active : classes.item}>Users </NavLink>
        </div>
        <div className={classes.navElementBlock}>
            <NavLink to="/my-friends" className={(navData) => navData.isActive ? classes.active : classes.item} >My friends</NavLink>
        </div>
          <div className={classes.navElementBlock}>
            <NavLink to="/dialog" className={(navData) => navData.isActive ? classes.active : classes.item}>Dialogs</NavLink>
        </div>
    </div>
}
export default Navbar