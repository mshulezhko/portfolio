import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import userAPI from '../../api/api'
import { 
    follow,
    unfollow,
    setUsers,
    setTotalCount,
    setPageSize,
    setCurrentPage,
    setFetching,
    setDisabledButton
} from '../../redux/users-reducer'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
            userAPI.getUsers(this.props.currentPage,this.props.totalCount).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.setFetching(false)
            }).catch(error => console.log(error))
    }

    setPage = (page) => {
        // debugger;
        this.props.setCurrentPage(page)

        this.props.setFetching(true)
           userAPI.getUsers(page,this.props.totalCount)
           .then(data => this.props.setUsers(data.items)).catch(error => console.log(error))
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
            setPage={this.setPage}
            followingInProgress={this.props.followingInProgress}
            setDisabledButton={this.props.setDisabledButton}
             />
    }
}


const UserContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setTotalCount,
        setPageSize,
        setCurrentPage,
        setFetching,
        setDisabledButton
    })(UsersAPIComponent)

export default UserContainer