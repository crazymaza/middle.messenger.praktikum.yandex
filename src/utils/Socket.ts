import messagesController from "../controllers/MessageController";

interface WebSocketProps {
  userId: string;
  chatId: string;
  token: string;
}

class Socket {
  private socket: WebSocket;
  private _baseUrl: string;
  private _chatsUrl: string;
  chatId: string;

  constructor({ userId, chatId, token }: WebSocketProps) {
    this._baseUrl = "wss://ya-praktikum.tech/ws/";
    this._chatsUrl = `${this._baseUrl}/chats`;
    this.chatId = chatId;
    this.socket = new WebSocket(
      `${this._chatsUrl}/${userId}/${chatId}/${token}`
    );
  }

  public send(message: string) {
    this.socket.send(JSON.stringify(message));
  }

  public open() {
    this.socket.onopen = () => {
      console.log("The connection is established");
      this.socket.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        })
      );
    };
  }

  public close() {
    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log("Connection closed cleanly");
      } else {
        console.log("Connection failure");
      }

      console.log(`Code: ${event.code} | Reason: ${event.reason}`);
    };
  }

  public message() {
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type !== "user connected") {
        messagesController.addMessage(data, this.chatId);
      }
    };
  }

  public error() {
    this.socket.onerror = (event: any) => {
      console.log("Error", event.message);
    };
  }
}

export default Socket;
