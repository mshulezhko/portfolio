import { profileAPI } from '../api/api'

const ADD_POST = 'profile-reducer/ADD_POST'
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
const SET_STATUS = 'profile-reducer/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile-reducer/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        { id: 2, message: 'hi', likesCount: 23 },
        { id: 3, message: 'hi33', likesCount: 3 },
        { id: 4, message: 'hieee', likesCount: 24 },
        { id: 6, message: 'hiefdq', likesCount: 2 },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export default function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { message: action.new_post, id: 1, likesCount: 123 }],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
}

export const addPostCreator = (new_post) => {
    return { type: ADD_POST, new_post }
}

export const savePhotoSuccess = (photos) => {
    return { type: SAVE_PHOTO_SUCCESS, photos }
}

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
export const setUserStatus = (status) => {
    return { type: SET_STATUS, status }
}

export const getUsersPRofileT = (userId) => async (dispatch) => {
    let responseData = await profileAPI.userProfile(userId)

    if (responseData) {
        return dispatch(setUserProfile(responseData))
    }
}

export const getUserStatusT = (userId) => async (dispatch) => {
    let responseData = await profileAPI.getStatus(userId)

    if (responseData) {
        return dispatch(setUserStatus(responseData))
    }
}

export const updateUserStatusT = (status) => async (dispatch) => {
    let responseData = await profileAPI.updateStatus(status)

    if (responseData.resultCode === 0) {
        return dispatch(setUserStatus(status))
    }
}

export const savePhoto = (files) => async (dispatch) => {
    const responseData = await profileAPI.savePhoto(files)
    console.log(responseData.data.photos)

    if (responseData.resultCode === 0) {
        return dispatch(savePhotoSuccess(responseData.data.photos))
    }

}

export const saveUserDataProfile = (userData) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let responseData = await profileAPI.saveUserDataProfile(userData)

    if (responseData.data.resultCode === 0) {
        dispatch(getUsersPRofileT(userId))
    }
}