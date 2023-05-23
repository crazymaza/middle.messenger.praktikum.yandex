import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

export class UserApi extends BaseAPI {
    static getUser = (): Promise<unknown> | undefined => {
        return new HTTPTransport().get(`${API_URL}/auth/user`, {})
    }

    static logout = () => {
        new HTTPTransport().post(`${API_URL}/auth/logout`, {});
    }

    static changeProfile = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/profile`, { data })
    }

    static changePassword = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/password`, { data })
    }

    static changeAvatar = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/profile/avatar`, {
            headers: {
                'content-type': 'multipart/form-data',
                credentials: 'include', // Нам нужно подставлять cookies
                mode: 'cors', // Работаем с CORS
            },
            data,
        })
    }
}
