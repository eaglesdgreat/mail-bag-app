import React from "react";

export interface IAddress {
  address: string;
  name: string
}

export interface IContact {
  _id?: number;
  name: string;
  email: string
}

export interface IMailbox {
  name: string;
  path: string;
}

export interface IMessage {
  id: string;
  date: string;
  from: IAddress[] | null;
  to?: IAddress[] | null;
  sender?: IAddress[] | null;
  subject: string;
  body?: string;
}

export type GlobalContextValue = {
  isLoaderVisible: boolean;
  showLoader: () => void; 
  hideLoader: () => void; 
  contacts: IContact[] | [];
  addContactToList: () => void;
  mailboxes: IMailbox[] | [];
  addMailboxToList: () => void;
  messages: IMessage[] | [];
  addMessageToList: () => void;
  currentView: string;
  currentMailbox: string | null;
  messageID : string | null;
  messageDate : string | null;
  messageFrom : string | null;
  messageTo : string | null;
  messageSubject : string | null;
  messageBody : string | null;
  contactID: string | null;
  contactName: string | null;
  contactEmail: string | null;
}

export type GlobalContextProviderProps = {
  children: React.ReactNode
}
