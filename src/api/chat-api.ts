import HTTPTransport from "../utils/HTTPTransport";
import { API_URL } from "../utils/constants";
import { BaseAPI } from "./base-api";

const BASE_CHAT_API = `${API_URL}/chats`;
class ChatApi extends BaseAPI {
    getChat() {
        return new HTTPTransport().get(BASE_CHAT_API,
            { headers: { 'content-type': 'application/json' } });
    }

    getChatToken(id: number) {
        return new HTTPTransport().post(`${BASE_CHAT_API}/token/id`,
            { headers: { 'content-type': 'application/json' } })
    }

    create(title: string) {
        return new HTTPTransport().post(BASE_CHAT_API,
            {data: {title}, headers: { 'content-type': 'application/json' } })
    }

    delete(chatId: number) {
        return new HTTPTransport().delete(BASE_CHAT_API,
            {data: {chatId}, headers: { 'content-type': 'application/json' }})
    }
}

export default new ChatApi();
