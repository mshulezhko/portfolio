import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return <div className='nav-container'>
        <div className="nav-elements">
            <div className='nav-element'>
                <NavLink to="/profile" className={(navData) => navData.isActive ? 'navbar-element active' : 'navbar-element'}>
                    <span class="material-symbols-outlined navbar-icon">
                        home
                    </span>
                    <p class='navbar-title'>Profile</p></NavLink>
            </div>
            <div className='nav-element'>
                <NavLink to="/users" className={(navData) => navData.isActive ? 'navbar-element active' : 'navbar-element'}>
                    <span class="material-symbols-outlined navbar-icon">
                        group
                    </span><p class='navbar-title'>Users</p> </NavLink>
            </div>
            <div className='nav-element'>
                <NavLink to="/my-friends" className={(navData) => navData.isActive ? 'navbar-element active' : 'navbar-element'}>

                    <span class="material-symbols-outlined navbar-icon">
                        diversity_1
                    </span>
                    <p class='navbar-title'>My friends</p></NavLink>
            </div>
            <div className='nav-element'>
                <NavLink to="/dialogs" className={(navData) => navData.isActive ? 'navbar-element active' : 'navbar-element'}>
                    <span class="material-symbols-outlined navbar-icon">
                        mail
                    </span>
                    <p class='navbar-title'>Dialogs</p></NavLink>
            </div>
        </div>
    </div>
}
export default Navbar