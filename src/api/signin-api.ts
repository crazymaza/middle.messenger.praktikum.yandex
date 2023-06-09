import { LoginFormDataInterface } from "../types/interfaces";
import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

export class SugninApi extends BaseAPI {
    create(data: LoginFormDataInterface): Promise<unknown> | undefined {
        if (!data) return;
        return new HTTPTransport().post(`${API_URL}/auth/signin`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data,
          })
    }
}
