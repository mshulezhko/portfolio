import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import { followActionCreator } from '../../redux/users-reducer'
import { unfollowActionCreator } from '../../redux/users-reducer'
import { setUsersActionCreator } from '../../redux/users-reducer'
import {setTotalCountActionCreator} from '../../redux/users-reducer'
import {setPageSizeActionCreator} from '../../redux/users-reducer'
import {setCurrentPageActionCreator} from '../../redux/users-reducer'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id)=>{dispatch(followActionCreator(id))},
        unfollow: (id) => {dispatch(unfollowActionCreator(id))},
        setUsers: (users) => {dispatch(setUsersActionCreator(users))},
        setTotalCount: (totalCount)=>{dispatch(setTotalCountActionCreator(totalCount))},
        setPageSize: (setPageSize)=>{dispatch(setPageSizeActionCreator(setPageSize))},
        setCurrentPage: (setCurrentPage)=>{dispatch(setCurrentPageActionCreator(setCurrentPage))}
    }
}

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setPage = (page) => {
        // debugger;
        this.props.setCurrentPage(page)
        console.log(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.totalCount}`)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.totalCount}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            setPage={this.setPage} />
    }
}


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UserContainer