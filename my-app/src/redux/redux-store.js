import { combineReducers, legacy_createStore as createStore } from 'redux';
import dialogReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sideBarReducer from './profile-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store