import { userAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'users-reducer/FOLLOW'
const UNFOLLOW = 'users-reducer/UNFOLLOW'
const SET_USERS = 'users-reducer/SET_USERS'
const TOTAL_COUNT = 'users-reducer/TOTAL_COUNT'
const PAGE_SIZE = 'users-reducer/PAGE_SIZE'
const CURRENT_PAGE = 'users-reducer/CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

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
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', { followed: false })
            }
        case SET_USERS:
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

export const setPage = (page, totalCount) => {

    return (dispatch) => {
        dispatch(setCurrentPage(page))
        dispatch(setFetching(true))

        userAPI.getUsers(page, totalCount)
            .then(data => dispatch(setUsers(data.items))).catch(error => console.log(error))

        dispatch(setFetching(false))
    }
}

export const unfollowUser = (id) => {
    return async (dispatch) => {
        dispatch(setDisabledButton(true, id))

        let apiMethod = userAPI.unfollowUser.bind(userAPI)
        let actionCreator = unfollow

        followUnfollowFlow(dispatch, id, apiMethod, actionCreator)

        dispatch(setDisabledButton(false, id))

    }
}

export const followUser = (id) => {
    return async (dispatch) => {
        let apiMethod = userAPI.followUser.bind(userAPI)
        let actionCreator = follow

        followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setDisabledButton(true, userId))

    let responseData = await apiMethod(userId)

    if (responseData.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(setDisabledButton(false, userId))
}
