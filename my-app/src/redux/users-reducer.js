const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        { id: 1, photo: 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000', fullName: 'me fullName', followed: true, status: 'hiiii', location: { city: 'K', country: 'U' } },
        { id: 2, photo: 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000', fullName: 'me fullName', followed: true, status: 'hiiii', location: { city: 'K', country: 'U' } },
        { id: 3, photo: 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000', fullName: 'me fullName', followed: false, status: 'hiiii', location: { city: 'K', country: 'U' } }

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
            return action.users

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