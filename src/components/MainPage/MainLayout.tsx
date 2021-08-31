import React, { useCallback, useContext, useRef} from "react";
import { DataStore } from "../../context/DataContext/DataContext";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";
import { HabitInterface, HabitTitleProps } from "../../interfaces";
import CellsGenerator from "./CellsGenerator";

export const HabitTitle: React.FC<HabitTitleProps> = ({ title, habitId, color }) => {
  const { UiState, uiDispatch } = useContext(UiStore);
  const { selectedHabitFocus } = UiState;

  const isFocused =
    selectedHabitFocus.focus && selectedHabitFocus.id === habitId
      ? "bg-gray-600 border-4 border-r-0 border-gray-500"
      : "bg-gray-700";

  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<HTMLDivElement>(null);

  const start = useCallback(() => {
    timeout.current = setTimeout(() => {
      uiDispatch(actions.toggleHabitFocus(true, habitId, title));
    }, 500);
  }, [uiDispatch, habitId, title]);

  const clear = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);
  }, []);

  // Check if user clicke outside of the habit
  // useEffect(() => {
  //   const handler = () => {
  //       uiDispatch(actions.toggleHabitFocus(false, null, null));
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, [uiDispatch]);

  return (
    <div
      ref={target}
      className={`h-12 my-1 ${isFocused} text-${color} flex justify-center items-center cursor-pointer`}
      onMouseDown={() => start()}
      onMouseUp={() => clear()}
      onMouseLeave={() => clear()}
      onTouchStart={() => start()}
      onTouchEnd={() => clear()}>
      <p style={{ userSelect: "none" }}>{title}</p>
    </div>
  );
};

const MainLayout: React.FC = () => {
  const { DataState } = useContext(DataStore);

  return (
    <>
      <div className="h-5/6 flex justify-center text-gray-300 font-semibold">
        <div className="w-full max-w-xl max-h-screen bg-gray-800 grid grid-cols-12">
          {/* Habits Col / Left Section */}
          <div className="col-span-4">
            <div className="h-12 my-1 bg-gray-800 flex justify-center items-center">
              &nbsp;
            </div>
            {DataState.habitsData.map((habit: HabitInterface) => {
              return (
                <HabitTitle
                  key={habit.id}
                  title={habit.title}
                  habitId={habit.id}
                  color={habit.color}
                />
              );
            })}
          </div>

          {/* Right Section */}
          <div className="col-span-8">
            <div className="grid grid-rows-6 overflow-auto">
              {/* Dates row */}
              <div className="row-span-1">
                <CellsGenerator />
              </div>

              {/* Checkboxs side */}
              <div className="row-span-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
