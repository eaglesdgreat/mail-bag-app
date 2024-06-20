import {
  ERROR,
  IDLE,
  PENDING,
  SUCCESS,
} from '../../constants/apiStatus';

import { ApiStatus } from "../../types/api";
import { IContact } from "../../types/context"
import { getContactsService } from '../../services/contact';
import { useState } from 'react';

export const useFetchContacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [apiStatus, setApiStatus] = useState<ApiStatus>(IDLE);

  const initFetchContacts = async () => {
    setApiStatus(PENDING);
    const {response, error} = await getContactsService();

    if (error) {
      setApiStatus(ERROR)
    } else if (response) {
      setContacts(response.data);
      setApiStatus(SUCCESS);
    }
  }

  return {
    contacts,
    apiStatus,
    initFetchContacts
  }
}
