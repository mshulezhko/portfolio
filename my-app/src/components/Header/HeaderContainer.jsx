import React from 'react'
import { getAuthMe } from '../../redux/auth-reducer'

import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userLogin: state.auth.login
    }
}

export default connect(mapStateToProps, { getAuthMe })(HeaderContainer)