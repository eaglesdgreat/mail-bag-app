import { useCallback, useState } from "react";

import { IMailbox } from "types/context";

export const useMailboxesState = (mailbox: IMailbox | null) => {
  const [state, setState] = useState<IMailbox[]>([]);
  const add = useCallback(() => {
    if (mailbox) {
      setState((prevState) => [...prevState, mailbox]);
    }
  }, [mailbox]);

  return {
    state,
    add,
  }
}