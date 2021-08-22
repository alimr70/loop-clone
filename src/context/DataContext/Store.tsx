import { createContext, useEffect, useReducer } from "react";
import { DataStateType } from "../../interfaces";

import reducer from "./reducer";

const initialState: DataStateType = [
  {
    id: "sadf-sdfg-sfg",
    title: "ورد استغفار",
    doneDates: [
      "Sat Aug 14 2021",
      "Sun Aug 15 2021",
      "Mon Aug 16 2021",
      "Tue Aug 17 2021",
      "Wed Aug 18 2021",
    ],
  },
  {
    id: "sadf-sdfg-sfg",
    title: "ورد الصلاة على النبي",
    doneDates: [
      "Sat Aug 14 2021",
      "Sun Aug 15 2021",
      "Mon Aug 16 2021",
      "Tue Aug 17 2021",
      "Wed Aug 18 2021",
    ],
  },
];

const PersistedState = localStorage.getItem("loopState");

const isDataSaved = PersistedState ? JSON.parse(PersistedState) : initialState;

export const Store = createContext(isDataSaved);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, isDataSaved);

  useEffect(() => {
    localStorage.setItem("loopState", JSON.stringify(state));
  }, [state]);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
