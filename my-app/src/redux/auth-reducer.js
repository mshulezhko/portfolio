import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    stopSubmitError: []
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            // debugger
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}


export const setUserData = (id, login, email, isAuth = false, stopSubmitError = []) => {
    // debugger
    return { type: SET_USER_DATA, data: { id, login, email, isAuth, stopSubmitError } }
}

export const getAuthMe = () => (dispatch) => {
    return authAPI.me().then(data => {
        // debugger
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data.id, data.data.login, data.data.email, true))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {

    return authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthMe())
        } else if (data.resultCode === 1) {
            console.log(data.messages)
            console.log('heh')
            dispatch(setUserData(null, null, null, false, data.messages))
        }
    })
}

export const logout = () => (dispatch) => {
    return authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}

export default authReducer