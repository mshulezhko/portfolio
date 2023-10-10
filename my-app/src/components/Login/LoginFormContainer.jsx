import Login from "./Login";
import { login, logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";


const LoginFormContainer = (props) => {
    return <Login login={props.login} stopSubmitError={props.stopSubmitError} />
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        stopSubmitError: state.auth.stopSubmitError
    }
}

export default connect(mapStateToProps, {login,logout})(LoginFormContainer)