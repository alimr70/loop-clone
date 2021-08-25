import { useContext } from "react";
import * as actions from "../context/actions";
import { DataStore } from "../context/DataContext/DataContext";
import { DayCellProps, WorkDayCellProps, HabitTitleProps } from "../interfaces";

export const DayCell: React.FC<DayCellProps> = ({ date }) => {
  return (
    <span className="w-12 text-center">
      {date.split(" ")[0]}
      <br />
      {date.split(" ")[2]}
    </span>
  );
};

export const HabitTitle: React.FC<HabitTitleProps> = ({ title }) => {
  return (
    <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
      {title}
    </div>
  );
};

export const WorkDayCell: React.FC<WorkDayCellProps> = ({ habitId, cellDate, done }) => {
  const {dispatch} = useContext(DataStore);

  return (
    <span
      className="w-12 flex items-center justify-center cursor-pointer"
      onClick={() => {
        dispatch(actions.checkWorkDayCell(habitId,cellDate));
      }}>
      {done ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
          className="h-5 w-5"
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

export const sortDates = (dates: string[]) => {
  let datesTimes = dates.map((el) => {
    return new Date(el).getTime();
  });

  let sortedTimes = datesTimes.sort((date1, date2) => {
    return date1 > date2 ? -1 : date2 > date1 ? 1 : 0;
  });

  let sortedDates = sortedTimes.map((el) => {
    return new Date(el).toDateString();
  });

  return sortedDates;
};

export const generateDays = (startDate: number) => {
  let daysArr: number[] = [];

  let todayDate = new Date().setHours(0, 0, 0, 0);

  const createDay = (lastDate: number): "" => {
    daysArr.push(lastDate);
    return lastDate === startDate ? "" : createDay(lastDate - 86400000);
  };

  createDay(todayDate);

  let dates = daysArr.map((el) => new Date(el).toDateString());

  return dates;
};

export const generate30Days = (startDate: number) => {
  let daysArr: number[] = [];

  let todayDate = new Date().setHours(0, 0, 0, 0);
  if (startDate === todayDate) {
    daysArr.push(startDate);
  }
  // startDate === todayDate ? daysArr.push(startDate) : "";

  for (let i = 0; i <= 30; i++) {
    if (daysArr.length) {
      daysArr.push(daysArr[daysArr.length - 1] - 86400000);
    } else {
      daysArr.push(startDate - 86400000);
    }
  }

  let dates = daysArr.map((el) => new Date(el).toDateString());

  return dates;
};
