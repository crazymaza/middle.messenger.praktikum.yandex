import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

class ChatApi extends BaseAPI {
    getChat() {
        return new HTTPTransport().get(`${API_URL}/chats`, {});
    }
}

export default new ChatApi();