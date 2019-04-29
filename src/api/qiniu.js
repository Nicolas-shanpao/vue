import axios from '@/plugins/http'
import api from '@/api/api'
import qs from 'qs'

export function getToken () {
    return axios({
        url: '/qiniu/upload/token', // 假地址 自行替换
        method: 'get'
    })
}
