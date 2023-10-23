import React from 'react'
import logo from '../../logo.svg';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
    const {isAuth, logout } = props

    return <div className='header'>
        <div>
            <img src={logo} alt="logo" />
            {isAuth ? <NavLink to={'/profile'} className={styles.auth}>Portfolio</NavLink> : <NavLink className={styles.auth}  to={'/login'}>Login</NavLink>}
        </div>
        <div>
           {isAuth && <button className={styles.btnLogout} onClick={logout}>Logout</button> }
        </div>
    </div>
}

export default Header