import { request } from './request'

export function getLoginData(paramData) {
    return request({
        url: '/login',
        params: paramData,
        method: 'post'
    })
}
