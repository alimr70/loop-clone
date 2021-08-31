import React, { useContext } from "react";
import { DataStore } from "../../context/DataContext/DataContext";
import * as actions from "../../context/actions";
import {generate30Days} from "../utils & smaller components ";
import { DayCellProps, HabitInterface, WorkDayCellProps } from "../../interfaces";
import { UiStore } from "../../context/UiContext/UiContext";

export const DayCell: React.FC<DayCellProps> = ({ date }) => {
  return (
    <span className="w-12 text-center">
      {date.split(" ")[0]}
      <br />
      {date.split(" ")[2]}
    </span>
  );
};

export const WorkDayCell: React.FC<WorkDayCellProps> = ({ habitId, cellDate, done, color }) => {
  const {dataDispatch} = useContext(DataStore);

  return (
    <span
      className="w-12 flex items-center justify-center cursor-pointer"
      onClick={() => {
        done
          ?dataDispatch(actions.unCheckWorkDayCell(habitId,cellDate))
          :dataDispatch(actions.checkWorkDayCell(habitId,cellDate));
      }}>
      {done ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-${color}`}
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-${color}`}
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </span>
  );
};

const CellsGenerator: React.FC = () => {
  const { DataState } = useContext(DataStore);
  
  const {UiState} = useContext(UiStore);
  const {selectedHabitFocus} = UiState;

  let days = generate30Days(new Date().setHours(0, 0, 0, 0));

  return (
    <>
      <div className="w-full h-12 my-1 bg-gray-800 flex">
        {days.map((day,index) => (
          days.length === index + 1
            ? <DayCell date={day} key={day} />
            : <DayCell date={day} key={day} />
        ))}
      </div>

      {DataState.habitsData.map((habit: HabitInterface) => {
        const isFocused = selectedHabitFocus.focus && selectedHabitFocus.id === habit.id
        ? "bg-gray-600 border-4 border-l-0 border-gray-500"
        : "bg-gray-700";
        return (
          <div key={habit.id} className={`w-full h-12 my-1 ${isFocused} flex`}>
            {days.map((day) => (
              <WorkDayCell
                habitId={habit.id}
                done={
                  habit.doneDates.find((date) => date === day) ? true : false
                }
                cellDate={day}
                color={habit.color}
                key={day}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default CellsGenerator;
