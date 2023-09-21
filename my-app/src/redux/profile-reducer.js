import { userAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialState = {
    posts: [
        { id: 2, message: 'hi', likesCount: 23 },
        { id: 3, message: 'hi33', likesCount: 3 },
        { id: 4, message: 'hieee', likesCount: 24 },
        { id: 6, message: 'hiefdq', likesCount: 2 },
    ],
    newPostText: '',
    profile: null
}

export default function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                likesCount: 123
            }

            if (state.newPostText.length > 0) {
                return {
                    ...state,
                    posts: [...state.posts, { ...newPost }],
                    newPostText: ''
                }
            }

            return state

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUsersPRofileT = (userId) => (dispatch) => {
    return userAPI.userProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        }).catch((error) => {
            console.log(error)
        })
}
