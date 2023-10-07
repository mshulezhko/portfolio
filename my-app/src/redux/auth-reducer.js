import { authAPI } from '../api/api'

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'

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
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}


export const setUserData = (id, login, email, isAuth = false, stopSubmitError = []) => {
    return { type: SET_USER_DATA, data: { id, login, email, isAuth, stopSubmitError } }
}

export const getAuthMe = () => async (dispatch) => {
    let responseData = await authAPI.me()

    if (responseData.resultCode === 0) {
        return dispatch(setUserData(responseData.data.id, responseData.data.login, responseData.data.email, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let responseData = await authAPI.login(email, password, rememberMe)

    if (responseData.resultCode === 0) {
        return dispatch(getAuthMe())
    } else if (responseData.resultCode === 1) {
        return dispatch(setUserData(null, null, null, false, responseData.messages))
    }

}

export const logout = () => async (dispatch) => {
    let responseData = await authAPI.logout()

    if (responseData.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer