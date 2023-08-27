import React from 'react'
import logo from '../../logo.svg';
import classes from  './Header.module.css'

function Header() {
    return <div className='header'>
<img src={logo} alt="logo" />
<p className={classes.item}>Header test new brench </p>
    </div>
}

export default Header