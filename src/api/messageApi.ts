import { IMessage } from "../types/context";
import { MessageProps } from "../types/api";
import api from "./api";

const URLS = {
  messagesUrl: "messages"
}

export const createMessage = (body: IMessage) => {
  return api.post<string>(URLS.messagesUrl, body);
}

export const getMailboxMessageById = (params: MessageProps) => {
  const url =  URLS.messagesUrl + "/" + params.mailbox + "/" + params.id;
  return api.get<string | boolean>(url);
}

export const deleteMailboxMessageById = (params: MessageProps) => {
  const url =  URLS.messagesUrl + "/" + params.mailbox + "/" + params.id;
  return api.delete<string>(url);
}
