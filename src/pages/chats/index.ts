import chatTemplate from "./chat.hbs";

interface ChatInterface {
  wrapper: string,
}

const chat = ({ wrapper }: ChatInterface): string => {
  return chatTemplate({ wrapper });
};

export default chat;
