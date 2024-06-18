import { useCallback, useState } from "react";

import { IContact } from "../types/context";

export const useContactsState = (contact: IContact | null) => {
  const [state, setState] = useState<IContact[]>([]);
  const add = useCallback(() => {
    if (contact) {
      setState((prevState) => [...prevState, contact]);
    }
  }, [contact]);

  return {
    state,
    add,
  }
}