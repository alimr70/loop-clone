import { createContext, useEffect, useReducer } from "react";
import { UiStateInterface } from "../../interfaces";

import UiReducer from "./UiReducer";

const initialState: UiStateInterface = {
  theme: "dark",
  showOverlay: {
    show: false,
    id: null,
    type: null,
  },
  selectedHabitFocus:{
    focus: false,
    id: null,
    title: null,
  },
  hideCompleted: false,
  hideArchived: false,
};

const PersistedState = localStorage.getItem("loopUiState");

const isSaved = PersistedState 
  ? JSON.parse(PersistedState)
  : {theme: initialState.theme, hideCompleted: initialState.hideCompleted, hideArchived: initialState.hideArchived};

initialState.theme = isSaved.theme;
initialState.hideCompleted = isSaved.hideCompleted;
initialState.hideArchived = isSaved.hideArchived;

export const UiStore = createContext<any>(initialState);

export const UiContext: React.FC = ({ children }) => {
  const [UiState, uiDispatch] = useReducer(UiReducer, initialState);

  useEffect(() => {
    localStorage.setItem("loopUiState", JSON.stringify({theme: UiState.theme, hideCompleted: UiState.hideCompleted, hideArchived: UiState.hideArchived}));
  }, [UiState.theme, UiState.hideCompleted, UiState.hideArchived]);

  return (
    <UiStore.Provider value={{ UiState, uiDispatch }}>{children}</UiStore.Provider>
  );
};
