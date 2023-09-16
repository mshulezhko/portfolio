import React from 'react'
import { setUserData } from '../../redux/auth-reducer'
import axios from 'axios'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    console.log(response.data.data)
                    const { id, email, login } = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer)