import { useCallback, useState } from "react";

export const useToggleState = (defaultValue: false) => {
  const [state, setState] = useState<boolean>(defaultValue);
  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);

  return {
    state,
    open,
    close
  }
}
