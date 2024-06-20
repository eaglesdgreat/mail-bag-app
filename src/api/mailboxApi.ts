import { IMailbox, IMessage } from "../types/context"

import api from "./api";

const URLS = {
  mailsUrl: "mailboxes",
}

export const fetchAllMailboxes = () => {
  return api.get<IMailbox[]>(URLS.mailsUrl)
}

export const fetchMessagesForMailbox = (mailbox: string) => {
  return api.get<IMessage>(URLS.mailsUrl + "/" + mailbox)
}
