import * as axios from "axios";

export const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":"7cbc0869-08cf-4a85-9d76-e9fba0c88dad"
    }
    });

export const usersAPI = {
    requestUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
            .then(response => response.data)
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUsersProfilePage (userId) {
        console.warn('Obselete method. Please use profileApi object')
        return profileAPI.getUsersProfilePage(userId)
    }
}

export const profileAPI = {
    getUsersProfilePage (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
      return instance.get(`profile/status/` + userId)
    },
    updateUsersStatus (status) {
        return instance.put(`profile/status`, {status: status });
    }
}


export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }

}
