import { createContext, useEffect, useReducer } from "react";
import { DataStateType } from "../../interfaces";

import DataReducer from "./DataReducer";

const initialState: DataStateType = {
  habitsData:[
    {
      id: "sadf-sdfg-sfg",
      title: "ورد استغفار",
      doneDates: [
      ],
    },
    {
      id: "sadf-sdfg-sfghh",
      title: "ورد الصلاة على النبي",
      doneDates: [
      ],
    },
    {
      id: "sadf-sdf",
      title: "ورد التوحيد",
      doneDates: [
      ],
    },
  ],
};

const PersistedState = localStorage.getItem("loopState");

const isDataSaved = PersistedState ? JSON.parse(PersistedState) : initialState;

export const DataStore = createContext(isDataSaved);

export const DataContext: React.FC = ({ children }) => {
  const [DataState, dispatch] = useReducer(DataReducer, isDataSaved);

  useEffect(() => {
    localStorage.setItem("loopState", JSON.stringify(DataState));
  }, [DataState]);

  return (
    <DataStore.Provider value={{ DataState, dispatch }}>{children}</DataStore.Provider>
  );
};
