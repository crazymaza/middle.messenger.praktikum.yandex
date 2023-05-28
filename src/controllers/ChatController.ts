import chatApi from "../api/chat-api";
import store from "../utils/store";
import { parseJson } from "../utils/utils";

class ChatController {
    getChats = () => {
        return chatApi.getChat()?.then((response: { response: string }) => {
            store.set("chats", parseJson(response.response));
        });
    }

    getChatToketById = (id: number) => {
        return chatApi.getChatToken(id)
            ?.then((resp: { response: string }) => {
                store.set('chatToken', parseJson(resp.response))
                return parseJson(resp.response);
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
