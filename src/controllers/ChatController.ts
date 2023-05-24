import { router } from "..";
import chatApi from "../api/chat-api";
import store from "../utils/store";

class ChatController {
    getChats = () => {
        return chatApi.getChat()?.then((response: { response: string }) => {
            store.set("chats", JSON.parse(response.response));
        });
    }

    getChatToketById = (id: number) => {
        return chatApi.getChatToken(id)
            ?.then((resp: { response: string }) => {
                return JSON.parse(resp.response)
            }).then(({ token }) => store.set("activeChatToken", token))
            .then(() => router.go)

    }

    createNewChat = (title: string) => {
        return chatApi.create(title)
            ?.then(() => this.getChats())
            .catch(err => alert(err.message))
    }

    deleteChat = (chatId: number) => {
        return chatApi.delete(chatId)
            ?.then(() => this.getChats())
            .catch(err => alert(err.message))
    }
}

export default new ChatController();
