import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
return <div className='nav'>
    <div>
    <NavLink  to="/dialog" className={(navData) => navData.isActive ? classes.active : classes.item}>Dialogs</NavLink>
    </div>
    <div>
    <NavLink to="/profile" className={(navData) => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
    </div>
</div>
}
export default Navbar