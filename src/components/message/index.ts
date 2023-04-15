import messageTemplate from "./message.hbs";
import * as classes from "./message.module.scss";

interface MessageInterface {
  isMine?: boolean,
  message?: string,
  isImg?: boolean,
  img?: string,
  imgAlt?: string
}

const message = (
  {
    isMine = false,
    message = "",
    isImg = false,
    img = "",
    imgAlt = ""
  }: MessageInterface): string => {
  const context = {
    chatMyMessage: classes.chat__message_my,
    chatMessage: classes.chat__message,
    isImg,
    isMine,
    img,
    imgAlt,
    message,
  };

  return messageTemplate(context);
};

export default message;
