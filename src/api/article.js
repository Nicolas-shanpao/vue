import axios from '@/plugins/http'
import api from '@/api/api'
import qs from 'qs'

export function fetchList (query) {
    return axios({
        url: '/article/list',
        method: 'get',
        params: query
    })
}

export function fetchArticle () {
    return axios({
        url: '/article/detail',
        method: 'get'
    })
}

export function createArticle (data) {
    return axios({
        url: '/article/create',
        method: 'post',
        data
    })
}

export function updateArticle (data) {
    return axios({
        url: '/article/update',
        method: 'post',
        data
    })
}

export function fetchPv (pv) {
    return axios({
        url: '/article/pv',
        method: 'get',
        params: {pv}
    })
}
