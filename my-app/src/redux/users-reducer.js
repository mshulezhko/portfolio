import { userAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const PAGE_SIZE = 'PAGE_SIZE'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    totalCount: 10,
    pageSize: 3,
    currentPage: 1,
    isFetching: false,
    users: [
        {
            "name": "my",
            "id": 29981,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }
    ],
    followingInProgress: []
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            // debugger;
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: true }
                    } else {
                        return user
                    }
                })
            }
        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: false }
                    } else {
                        return user
                    }
                })
            }
        case SET_USERS:
            // debugger
            // console.log(action.users)
            return { ...state, users: action.users }
        case CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case PAGE_SIZE:
            return { ...state, pageSize: action.pageSize }
        case TOTAL_COUNT:
            //action.totalCount
            if (action.totalCount > 100) {
                return { ...state, totalCount: 99 }
            }

            return { ...state, totalCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [state.followingInProgress, action.userId] :
                    [state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state
    }
}

export const follow = (id) => {
    return { type: FOLLOW, id }
}

export const unfollow = (id) => {
    return { type: UNFOLLOW, id }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setTotalCount = (totalCount) => {
    return { type: TOTAL_COUNT, totalCount }
}

export const setPageSize = (pageSize) => {
    return { type: PAGE_SIZE, pageSize }
}

export const setCurrentPage = (currentPage) => {
    // debugger;
    return { type: CURRENT_PAGE, currentPage }
}

export const setFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const setDisabledButton = (isFetching, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}
export const getUsersThunk = (currentPage, totalCount) => {
    return (dispatch) => {

        dispatch(setFetching(true))

        userAPI.getUsers(currentPage, totalCount).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setFetching(false))
        }).catch(error => console.log(error))
    }
}

export const setPageThunk = (page, totalCount) => {

    return (dispatch) => {
        dispatch(setCurrentPage(page))
        dispatch(setFetching(true))

        userAPI.getUsers(page, totalCount)
            .then(data => dispatch(setUsers(data.items))).catch(error => console.log(error))

        dispatch(setFetching(false))
    }
}

export const unfollowUserThunk = (id) => {
    return (dispatch) => {
        dispatch(setDisabledButton(true, id))

        userAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }

            dispatch(setDisabledButton(false, id))

        })
    }
}

export const followUserThunk = (id) => {
    return (dispatch) => {
        dispatch(setDisabledButton(true, id))
        userAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }

            dispatch(setDisabledButton(false, id))
        })
    }
}
