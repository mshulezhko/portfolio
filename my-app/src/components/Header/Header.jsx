import React from 'react'
import logo from '../../logo.svg';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';


function Header(props) {
    const {isAuth, userLogin, logout } = props

    return <div className='header'>
        <img src={logo} alt="logo" />
        <div className={classes.auth} >
            {isAuth ? userLogin : <NavLink to={'/login'}>login</NavLink>}
        </div>
        <div>
           {isAuth && <button onClick={logout}>logout</button> }
        </div>
    </div>
}

export default Header