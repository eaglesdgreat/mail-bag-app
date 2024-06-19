import { IMailbox, IMessage } from "../types/context"

import api from "./api";

const URLS = {
  mailsUrl: "mailboxes",
}

export const fetchAllMails = () => {
  return api.get<IMailbox[]>(URLS.mailsUrl)
}

export const fetchSingleMail = (mailbox: string) => {
  return api.get<IMessage>(URLS.mailsUrl + "/" + mailbox)
}
