import store from "../utils/store";

interface MessageProps {
  content: string;
  time: string;
  user_id: number;
  type: string;
}
class MessagesController {
  addMessage(message: MessageProps, chatId: string) {
    const { messages = {} } = store.getState();
    if (Array.isArray(message)) {
      messages[chatId] = message.reverse();
    } else {
      messages[chatId].push(message);
    }

    store.set("messages", messages);
  }
}

const messagesController = new MessagesController();
export default messagesController;
