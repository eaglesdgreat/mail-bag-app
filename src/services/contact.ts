import {
  createContact,
  deleteContactById,
  fetchAllContacts,
  updateContact,
} from './../api/contactApi';

import { IContact } from "../types/context";
import { withAsync } from "../helpers/withAsync";

export async function getContactsService() {
  const { response, error } = await withAsync(() => fetchAllContacts());

  return {
    response,
    error
  }
}

export async function createContactService(body: IContact) {
  const { response, error } = await withAsync(() => createContact(body));

  return {
    response,
    error
  }
}

export async function updateContactService(body: IContact) {
  const { response, error } = await withAsync(() => updateContact(body));

  return {
    response,
    error
  }
}

export async function deleteContactByIdService(contactId: string) {
  const { response, error } = await withAsync(() => deleteContactById(contactId));

  return {
    response,
    error
  }
}
