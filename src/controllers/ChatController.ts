import chatApi from "../api/chat-api";
import store from "../utils/store";

class ChatController {
    getChats = () => {
        return chatApi.getChat()?.then((response: { response: string }) => {
            store.set("chats", JSON.parse(response.response));
        });
    }
}

export default new ChatController();
