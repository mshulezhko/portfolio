const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const PAGE_SIZE = 'PAGE_SIZE'
const CURRENT_PAGE = 'CURRENT_PAGE'

const initialState = {
    totalCount: 10,
    pageSize: 3,
    currentPage: 1,
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
    ]
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

        default:
            return state
    }
}

export const followActionCreator = (id) => {
    return { type: FOLLOW, id }
}

export const unfollowActionCreator = (id) => {
    return { type: UNFOLLOW, id }
}

export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users }
}

export const setTotalCountActionCreator = (totalCount) => {
    return { type: TOTAL_COUNT, totalCount }
}

export const setPageSizeActionCreator = (pageSize) => {
    return { type: PAGE_SIZE, pageSize }
}

export const setCurrentPageActionCreator = (currentPage) => {
    // debugger;
    return { type: CURRENT_PAGE, currentPage }
}