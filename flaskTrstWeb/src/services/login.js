import request from '@/utils/request';
import { CONFIG } from '@/consts/config';

//登录接口
export async function login(params) {
    return request(`${CONFIG.URL}/auth/login`, {
        method: 'POST',
        data: params,
    });
}

//注册接口
export async function register(params) {
    return request(`${CONFIG.URL}/auth/register`, {
        method: 'POST',
        data: params,
    });
}