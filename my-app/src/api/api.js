import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "83c57117-7fab-4acf-8089-4ab2e5a8a0ed"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
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

export const profileAPI = {
    userProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        // debugger
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status }).then(response => response.data)
    },
    savePhoto(file) {
        const form = new FormData()
        form.append('image', file)
        return instance.put('/profile/photo', form, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveUserDataProfile(userData) {
        return instance.put('/profile', userData)
    }
}

export const authAPI = {
    // https://social-network.samuraijs.com/api/1.0/auth/me
    me() {
        return instance.get('auth/me').then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', { email, password, rememberMe, captcha }).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.post('/security/get-captcha-url')
    }
}

