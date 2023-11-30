import React from 'react'
import '../common/styles_base.css'
import './header.css'

import { NavLink } from 'react-router-dom';

function Header(props) {
    const { isAuth, logout } = props
    const body = document.body;

    const currentTheme = localStorage.getItem('currentTheme');

    // Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
    if (currentTheme) {
        body.classList.add('light-theme');
    }

    const themeChanges = () => {
        body.classList.toggle('light-theme');

        // If the body has the class of light theme then add it to local Storage, if not remove it
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('currentTheme', 'themeActive');
        } else {
            localStorage.removeItem('currentTheme');
        }
    }

    return <header className='header' id="header" >
        <NavLink to={'/profile'} >
            <h2 class="logo">Social Network</h2>
        </NavLink>
        <div className="btn-wrapper">
        <button onClick={themeChanges} class="btn place-items-center" id="theme-toggle-btn">
            <i class="ri-sun-line sun-icon"></i>
            <i class="ri-moon-line moon-icon"></i>
        </button>
        {isAuth && <button  onClick={logout}  class="btn sign-up-btn fancy-border screen-sm-hidden">
            <span >Logout</span>
        </button >}
        </div>
    </header>
}

export default Header