import React, { useContext } from "react";
import { DataStore } from "../../context/DataContext/DataContext";
import { HabitInterface } from "../../interfaces";
import { HabitTitle } from "../utils & smaller components ";
import CellsGenerator from "./CellsGenerator";

const MainLayout:React.FC = () => {
  const {DataState} = useContext(DataStore);

  return (
    <div className="h-5/6 flex justify-center text-gray-300 font-semibold">
      <div className="w-full max-w-xl max-h-screen bg-gray-800 grid grid-cols-12">
        {/* Habits Col / Left Section */}
        <div className="col-span-4">
          <div className="h-12 my-1 bg-gray-800 flex justify-center items-center">
            &nbsp;
          </div>
          {
            DataState.habitsData.map((habit:HabitInterface)=>{
              return <HabitTitle key={habit.id} title={habit.title} habitId={habit.id} />
            })
          }
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
  );
};

export default MainLayout;
