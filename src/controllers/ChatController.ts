import chatApi from "../api/chat-api";
import { ChatInerface } from "../types/interfaces";
import store from "../utils/store";
import { parseJson } from "../utils/utils";

class ChatController {
    getChats = () => {
        return chatApi.getChat()?.then((response: { response: string }) => {
            store.set("chats", parseJson(response.response));
        });
    }

    getChatToketById = (chat: ChatInerface) => {
        return chatApi.getChatToken(chat.id)
            ?.then((resp: { response: string }) => {
                store.set('chatToken', parseJson(resp.response))
                return parseJson(resp.response);
            })
            .then((data) => {
                store.set('activeChat', chat);
                return data;
            })
    }

    getChatUsers = (chatId: number) => {
        return chatApi.getChatUsers(chatId);
    }

    createNewChat = (title: string) => {
        return chatApi.create(title)
            ?.then(() => this.getChats())
            .catch(err => alert(err.message))
    }

    addUsersToChat = (users: number[], chatId: number) => {
        return chatApi.addUsers(users, chatId);
    }

    deleteChat = (chatId: number) => {
        return chatApi.delete(chatId)
            ?.then(() => this.getChats())
            .catch(err => alert(err.message))
    }

    deleteUser = (chatId: number, users: number[]) => {
        return chatApi.deleteUser(chatId, users)
    }
}

export default new ChatController();
