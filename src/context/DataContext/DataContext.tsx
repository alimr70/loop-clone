import { createContext, useEffect, useReducer } from "react";
import { DataStateType } from "../../interfaces";

import DataReducer from "./DataReducer";

const initialState: DataStateType = {
  habitsData: [
    {
      id: "ZpZjSYVRwk6Kdml9MSO9D",
      title: "Welcome To Habits Clone",
      color: "gray-300",
      doneDates: [],
      archived: false,
    },
    {
      id: "gJFLO8E-3tidxzZFTdfgw",
      title: "Where You Can Create Habits",
      color: "gray-300",
      doneDates: [],
      archived: false,
    },
    {
      id: "RKTg_A6xvgHZ7EIuklUxd",
      title: "And Track Your Progress",
      color: "gray-300",
      doneDates: [],
      archived: false,
    },
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
    <DataStore.Provider value={{ DataState, dataDispatch }}>
      {children}
    </DataStore.Provider>
  );
};
