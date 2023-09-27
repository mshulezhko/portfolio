import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
            // debugger
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostCreator = (new_post) => {
    return { type: ADD_POST, new_post }
}
// export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => {
    return { type: SET_STATUS, status }
}

export const getUsersPRofileT = (userId) => (dispatch) => {
    return profileAPI.userProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        }).catch((error) => {
            console.log(error)
        })
}

export const getUserStatusT = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then(data => {
        // debugger
        console.log(data)
        dispatch(setUserStatus(data))
    })
}

export const updateUserStatusT = (status) => (dispatch) => {
    return profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}