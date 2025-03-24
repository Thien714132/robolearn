import React, { Dispatch, ReactNode, useReducer } from "react";
import { initialState } from "./state";
import { reducer } from "./reducer";

type Props = {
  children: ReactNode;
};

export type Action = {
  type: string;
  payload: unknown;
};

type ContextType = {
  appState: AppState;
  dispatch: Dispatch<Action>;
};

export const AppContext = React.createContext<ContextType>({
  appState: initialState,
  dispatch: () => null,
});

const AppProvider = ({ children }: Props) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        appState,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
