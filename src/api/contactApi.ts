import { IContact } from "../types/context";
import api from "./api";

const URLS = {
  contactsUrl: "contacts"
}

export const fetchAllContacts = () => {
  return api.get<IContact[]>(URLS.contactsUrl)
}

export const createContact = (body: IContact) => {
  return api.post<IContact>(URLS.contactsUrl, body)
}

export const updateContact = (body: IContact) => {
  return api.put<IContact>(URLS.contactsUrl, body)
}

export const deleteContactById = (contactId) => {
  return api.delete<string>(URLS.contactsUrl + "/" + contactId)
}
