import { GlobalContextProviderProps, GlobalContextValue } from "types/context";

import { createContext } from "react";
import { useContactsState } from "hooks/useContactsState";
import { useToggleState } from "hooks/useToggleState";

const initialState = {
  mailboxes: [],
  messages: [],
  currentView: "welcome",
  currentMailbox: null,
  messageID: null,
  messageDate: null,
  messageFrom: null,
  messageTo: null,
  messageSubject: null,
  messageBody: null,
  contactID: null,
  contactName: null,
  contactEmail: null,
};

export const GlobalContext = createContext<GlobalContextValue | undefined>(
  undefined
);

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const { children } = props;
  
  const {
    state: isLoaderVisible,
    open: showLoader,
    close: hideLoader,
  } = useToggleState(false);

  const {
    state: contacts,
    add: addContactToList,
  } = useContactsState(null);

  return (
    <GlobalContext.Provider
      value={{
        ...initialState,
        isLoaderVisible,
        showLoader,
        hideLoader,
        contacts,
        addContactToList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
