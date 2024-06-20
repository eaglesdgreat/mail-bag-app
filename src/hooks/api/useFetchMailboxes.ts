import {
  ERROR,
  IDLE,
  PENDING,
  SUCCESS,
} from '../../constants/apiStatus';

import { ApiStatus } from "../../types/api";
import { IMailbox } from "../../types/context"
import { getMailboxesService } from '../../services/mailbox';
import { useState } from 'react';

export const useFetchMailboxes = () => {
  const [mailBoxes, setMailBoxes] = useState<IMailbox[]>([]);
  const [apiStatus, setApiStatus] = useState<ApiStatus>(IDLE);

  const initFetchMailboxes = async () => {
    setApiStatus(PENDING);
    const {response, error} = await getMailboxesService();

    if (error) {
      setApiStatus(ERROR)
    } else if (response) {
      setMailBoxes(response.data);
      setApiStatus(SUCCESS);
    }
  }

  return {
    mailBoxes,
    apiStatus,
    initFetchMailboxes,
  }
}
