import { useContext } from "react";
import { DataStore } from "../../context/DataContext/DataContext";
import {
  DayCell,
  generate30Days,
  WorkDayCell,
} from "../utils & smaller components ";
import { HabitInterface } from "../../interfaces";

const CellsGenerator: React.FC = () => {
  const { DataState } = useContext(DataStore);

  let days = generate30Days(new Date().setHours(0, 0, 0, 0));

  return (
    <>
      <div className="w-full h-12 my-1 bg-gray-800 flex">
        {days.map((day) => (
          <DayCell date={day} key={day} />
        ))}
      </div>

      {DataState.habitsData.map((habit: HabitInterface) => {
        return (
          <div key={habit.id} className="w-full h-12 my-1 bg-gray-700 flex">
            {days.map((day) => (
              <WorkDayCell
                habitId={habit.id}
                done={
                  habit.doneDates.find((date) => date === day) ? true : false
                }
                cellDate={day}
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
