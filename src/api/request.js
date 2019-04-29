import axios from '@/plugins/http'
import api from './api'
import qs from 'qs'

export default {
    geturl (params) {
        return axios({
            url: api.get_url,
            method: 'get',
            params: params
        })
    },
    // 天气预报
    currentWeather (params) {
        return axios({
            url: api.get_weather,
            method: 'get',
            params: params
        })
    },
    // 首屏
    getGisplus (params) {
        return axios({
            url: api.get_gisplus,
            method: 'get',
            params: params
        })
    },
    // 轮播图
    getImage (params) {
        return axios({
            url: api.get_image,
            method: 'get',
            params: params
        })
    },
    // 安全环保问题
    getAqhb (params) {
        return axios({
            url: api.get_aqhb,
            method: 'get',
            params: params
        })
    },
    // 质量问题
    getZlwt (params) {
        return axios({
            url: api.get_zlwt,
            method: 'get',
            params: params
        })
    },
    // 质量问题的巡检列表
    getZlwtList (params) {
        return axios({
            url: api.get_zlwt_list,
            method: 'get',
            params: params
        })
    },
    // 产值进度
    getCzjd (params) {
        return axios({
            url: api.get_czjd,
            method: 'get',
            params: params
        })
    }
}
