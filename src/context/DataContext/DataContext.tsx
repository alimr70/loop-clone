import { createContext, useEffect, useReducer } from "react";
import { DataStateType } from "../../interfaces";

import DataReducer from "./DataReducer";

const initialState: DataStateType = {
  habitsData:[
  ],
};

const PersistedState = localStorage.getItem("loopState");

const isDataSaved = PersistedState ? JSON.parse(PersistedState) : initialState;

export const DataStore = createContext(isDataSaved);

export const DataContext: React.FC = ({ children }) => {
  const [DataState, dataDispatch] = useReducer(DataReducer, isDataSaved);

  useEffect(() => {
    localStorage.setItem("loopState", JSON.stringify(DataState));
  }, [DataState]);

  return (
    <DataStore.Provider value={{ DataState, dataDispatch }}>{children}</DataStore.Provider>
  );
};
