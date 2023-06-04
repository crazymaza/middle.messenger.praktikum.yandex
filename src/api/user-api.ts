import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

export class UserApi extends BaseAPI {
    static getUser = (): Promise<unknown> | undefined => {
        return new HTTPTransport().get(`${API_URL}/auth/user`, {headers: { 'content-type': 'application/json' }})
    }

    static logout = () => {
        new HTTPTransport().post(`${API_URL}/auth/logout`, {headers: { 'content-type': 'application/json' }});
    }

    static changeProfile = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/profile`, { data, headers: { 'content-type': 'application/json'  }})
    }

    static changePassword = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/password`, { data, headers: { 'content-type': 'application/json'  }})
    }

    static changeAvatar = (data: FormData) => {
        return new HTTPTransport().put(`${API_URL}/user/profile/avatar`, {
            data
        })
    }
}
