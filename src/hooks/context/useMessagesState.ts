import { useCallback, useState } from "react";

import { IMessage } from "types/context";

export const useMessagesState = (message: IMessage | null) => {
  const [state, setState] = useState<IMessage[]>([]);
  const add = useCallback(() => {
    if (message) {
      setState((prevState) => [...prevState, message]);
    }
  }, [message]);

  return {
    state,
    add,
  }
}