import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import { follow } from '../../redux/users-reducer'
import { unfollow } from '../../redux/users-reducer'
import { setUsers } from '../../redux/users-reducer'
import {setTotalCount} from '../../redux/users-reducer'
import {setPageSize} from '../../redux/users-reducer'
import {setCurrentPage} from '../../redux/users-reducer'
import {setFetching} from '../../redux/users-reducer'


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id)=>{dispatch(follow(id))},
//         unfollow: (id) => {dispatch(unfollow(id))},
//         setUsers: (users) => {dispatch(setUsers(users))},
//         setTotalCount: (totalCount) => {dispatch(setTotalCount(totalCount))},
//         setPageSize: (setPageSize) => {dispatch(setPageSize(setPageSize))},
//         setCurrentPage: (setCurrentPage) => {dispatch(setCurrentPage(setCurrentPage))},
//         setFetching:(isFetching) => {dispatch(setFetching(isFetching))}
//     }
// }

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.setFetching(false)
            })
    }

    setPage = (page) => {
        // debugger;
        this.props.setCurrentPage(page)
        console.log(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.totalCount}`)

        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.totalCount}`)
            .then(response => this.props.setUsers(response.data.items))
            this.props.setFetching(false)
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


const UserContainer = connect(mapStateToProps,
    {follow, unfollow,setUsers,setTotalCount, setPageSize,setCurrentPage, setFetching})(UsersAPIComponent)

export default UserContainer