import React from 'react'
import logo from '../../logo.svg';
import classes from  './Header.module.css'
import { NavLink } from 'react-router-dom';


function Header(props) {
    return <div className='header'>
<img src={logo} alt="logo" />
<div className={classes.auth} >
    {props.isAuth ? props.userLogin : <NavLink to={'/login'}>login</NavLink>}
</div>
<p className={classes.item}>Header test new brench </p>
    </div>
}

export default Header