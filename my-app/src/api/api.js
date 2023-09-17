import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "83c57117-7fab-4acf-8089-4ab2e5a8a0ed"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const userAPI = {
    getUsers(currentPage, totalCount) {
        return instance.get(`users?page=${currentPage}&count=${totalCount}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export default userAPI