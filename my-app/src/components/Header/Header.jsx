import React from 'react'
import logo from '../../logo.svg';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
    const {isAuth, userLogin, logout } = props

    return <div className='header'>
        <img src={logo} alt="logo" />
        <div>
            {isAuth ? userLogin : <NavLink className={styles.auth}  to={'/login'}>Login</NavLink>}
        </div>
        <div>
           {isAuth && <button className={styles.btnLogout} onClick={logout}>Logout</button> }
        </div>
    </div>
}

export default Header