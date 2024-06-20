import { GlobalContextProviderProps, GlobalContextValue } from "types/context";

import { createContext } from "react";
import { useContactsState } from "hooks/context/useContactsState";
import { useMailboxesState } from 'hooks/context/useMailboxesState';
import { useMessagesState } from "hooks/context/useMessagesState";
import { useToggleState } from "hooks/context/useToggleState";

const initialState = {
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

  const {
    state: mailboxes,
    add: addMailboxToList,
  } = useMailboxesState(null);

  const {
    state: messages,
    add: addMessageToList,
  } = useMessagesState(null);

  return (
    <GlobalContext.Provider
      value={{
        ...initialState,
        isLoaderVisible,
        showLoader,
        hideLoader,
        contacts,
        addContactToList,
        mailboxes,
        addMailboxToList,
        messages,
        addMessageToList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
