import { connect } from 'react-redux'
// import Users from './Users'
import UsersClass from './UsersClass'
import { followActionCreator } from '../../redux/users-reducer'
import { unfollowActionCreator } from '../../redux/users-reducer'
import { setUsersActionCreator } from '../../redux/users-reducer'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id)=>{dispatch(followActionCreator(id))},
        unfollow: (id) => {dispatch(unfollowActionCreator(id))},
        setUsers: (users) => {dispatch(setUsersActionCreator(users))}
    }
}


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UserContainer