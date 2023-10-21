import React from 'react'

import Header from './Header'
import { connect } from 'react-redux'
import { logout } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    return <Header
        isAuth={props.isAuth}
        userLogin={props.userLogin}
        logout={props.logout}
    />

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userLogin: state.auth.login
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)