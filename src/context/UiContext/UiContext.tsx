import { createContext, useEffect, useReducer } from "react";
import { UiStateInterface } from "../../interfaces";

import UiReducer from "./UiReducer";

const initialState: UiStateInterface = {
  theme: "dark",
  showAddHabitOverlay: {
    show: false,
    id: null,
  },
  selectedHabitFocus:{
    focus: false,
    id: null,
  }
};

const PersistedState = localStorage.getItem("loopUiState");

const isThemeSaved = PersistedState 
  ? JSON.parse(PersistedState)
  : initialState.theme;

initialState.theme = isThemeSaved;

export const UiStore = createContext<any>(initialState);

export const UiContext: React.FC = ({ children }) => {
  const [UiState, uiDispatch] = useReducer(UiReducer, initialState);

  useEffect(() => {
    localStorage.setItem("loopUiState", JSON.stringify(UiState.theme));
  }, [UiState.theme]);

  return (
    <UiStore.Provider value={{ UiState, uiDispatch }}>{children}</UiStore.Provider>
  );
};
