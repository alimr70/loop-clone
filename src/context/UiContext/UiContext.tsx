import { createContext, useEffect, useReducer } from "react";
import { UiStateInterface } from "../../interfaces";

import UiReducer from "./UiReducer";

const initialState: UiStateInterface = {
  showAddHabitOverlay: {
    show: false,
    id: null
  },
};

const PersistedState = localStorage.getItem("loopUiState");

const isDataSaved = PersistedState ? JSON.parse(PersistedState) : initialState;

export const UiStore = createContext(isDataSaved);

export const UiContext: React.FC = ({ children }) => {
  const [UiState, uiDispatch] = useReducer(UiReducer, isDataSaved);

  useEffect(() => {
    localStorage.setItem("loopUiState", JSON.stringify(UiState));
  }, [UiState]);

  return (
    <UiStore.Provider value={{ UiState, uiDispatch }}>{children}</UiStore.Provider>
  );
};
