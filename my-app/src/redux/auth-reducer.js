import { authAPI, securityAPI } from '../api/api'

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth-reducer/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    stopSubmitError: [],
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}


export const setUserData = (id, login, email, isAuth = false, stopSubmitError = []) => {
    return { type: SET_USER_DATA, data: { id, login, email, isAuth, stopSubmitError } }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return { type: GET_CAPTCHA_URL_SUCCESS, captchaUrl }
}

export const getAuthMe = () => async (dispatch) => {
    let responseData = await authAPI.me()

    if (responseData.resultCode === 0) {
        return dispatch(setUserData(responseData.data.id, responseData.data.login, responseData.data.email, true))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let responseDataCaptcha = await securityAPI.getCaptchaUrl()

    dispatch(getCaptchaUrlSuccess(responseDataCaptcha.data.url))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let responseData = await authAPI.login(email, password, rememberMe, captcha)

    if (responseData.resultCode === 0) {
        return dispatch(getAuthMe())
    } else if (responseData.resultCode === 1) {
        return dispatch(setUserData(null, null, null, false, responseData.messages))
    } else if (responseData.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }

}

export const logout = () => async (dispatch) => {
    let responseData = await authAPI.logout()

    if (responseData.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer