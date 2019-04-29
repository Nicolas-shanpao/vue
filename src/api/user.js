import axios from '@/plugins/http'
import api from '@/api/api'
import qs from 'qs'

export function getUserInfo () {
    return axios({
        url: api.getPermission,
        method: 'get'
    })
}

export function loginByUsername (username, password) {
    const data = {
        username,
        password
    }
    return axios({
        url: api.login,
        method: 'post',
        data: qs.stringify(data)
    })
}

export function logout () {
    return axios({
        url: api.logout,
        method: 'post'
    })
}

// 测试
// export function loginByUsername (username, password) {
//   const data = {
//     username,
//     password
//   }
//   return axios({
//     url: api.logins,
//     method: 'post',
//     data: qs.stringify(data)
//   })
// }
//
// export function logout () {
//   return axios({
//     url: api.logout,
//     method: 'post'
//   })
// }
