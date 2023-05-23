import { RegisterFormDataInterface } from "../types/interfaces";
import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

export class SignupApi extends BaseAPI {
    create(data: RegisterFormDataInterface): Promise<unknown> | undefined {
        if (!data) return;
        return new HTTPTransport().post(`${API_URL}/auth/signup`, { data })
    }
}
