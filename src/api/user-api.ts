import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

export class UserApi extends BaseAPI {
    static getUser = (): Promise<unknown> | undefined => {
        return new HTTPTransport().get(`${API_URL}/auth/user`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {},
        });
    }

    static logout = () => {
        new HTTPTransport().post(`${API_URL}/auth/logout`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {},
        });
    }

    static changeProfile = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/profile`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data
        });
    }

    static changePassword = (data: any) => {
        return new HTTPTransport().put(`${API_URL}/user/password`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data
        });
    }

    static changeAvatar = (data: FormData) => {
        return new HTTPTransport().put(`${API_URL}/user/profile/avatar`, {
            method: "PUT",
            data,
          });
    }
}
