import { fetchAllMailboxes, fetchMessagesForMailbox } from "../api/mailboxApi";

import { withAsync } from "../helpers/withAsync";

export async function getMailboxesService() {
  const { response, error } = await withAsync(() => fetchAllMailboxes());

  return {
    response,
    error
  }
}

export async function getMessagesForMailboxService(mailbox: string) {
  const { response, error } = await withAsync(() => fetchMessagesForMailbox(mailbox));

  return {
    response,
    error
  }
}
