import React from 'react'

import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {

    render() {
        return <Header
        isAuth={this.props.isAuth}
        userLogin={this.props.userLogin}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userLogin: state.auth.login
    }
}

export default connect(mapStateToProps, null)(HeaderContainer)