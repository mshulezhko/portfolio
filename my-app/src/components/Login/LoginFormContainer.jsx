import Login from "./Login";
import { login, logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";


const LoginFormContainer = (props) => {
    return <Login captchaUrl={props.captchaUrl} login={props.login} stopSubmitError={props.stopSubmitError} />
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        stopSubmitError: state.auth.stopSubmitError,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login,logout})(LoginFormContainer)