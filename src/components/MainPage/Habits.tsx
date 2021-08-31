import React, { useContext, useRef, useState } from "react";
import Header from "./Header";
import MainLayout from "./MainLayout";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";
import { nanoid } from "nanoid";
import { DataStore } from "../../context/DataContext/DataContext";
import { ColorType } from "../../interfaces";
import { useCallback } from "react";

const Habits: React.FC = () => {
  return (
    <>
      <Overlay />
      <Header />
      <MainLayout />
    </>
  );
};

const Overlay = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const { UiState, uiDispatch } = useContext(UiStore);
  const { showOverlay } = UiState;

  const showOrNot = showOverlay.show ? "" : "hidden";
  
  return (
    <div
      className={`${showOrNot} absolute w-full h-full bg-black bg-opacity-70 flex items-center justify-center`}
      // id="bg"
      ref={bgRef}
      onClick={(e): void => {
        if (e.target === bgRef.current) {
          uiDispatch(actions.toggleShowOverlay(false, null, null));
        }
      }}>
      {
        showOverlay.type === "edit"? <EditOverlay /> : <ColorOverlay />
      }
    </div>
  );
};

const EditOverlay: React.FC = () => {
  const { UiState, uiDispatch } = useContext(UiStore);
  const { showOverlay, selectedHabitFocus } = UiState;
  const {dataDispatch} = useContext(DataStore);
  const [projectTitle, setProjectTitle] = useState("");
  const hasId = showOverlay.id ? showOverlay.id : nanoid();
  const addOrEdit = selectedHabitFocus.id ? "Edit" : "Add";

  return (
<div className="bg-gray-800 p-5 rounded-md flex items-center justify-center flex-col">
        <p className="my-2 text-gray-100">{addOrEdit} Habit</p>
        <input
          className="my-1 p-1 rounded-md"
          type="text"
          name="addProject"
          id="addProcject"
          placeholder={selectedHabitFocus.title}
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
          }}
        />
        <button
          className="bg-green-500 text-gray-100 my-2 px-2 rounded-md"
          onClick={() => {
            if (/\S/.test(projectTitle)) {
              if(addOrEdit === "Edit"){
                dataDispatch(actions.editHabit(selectedHabitFocus.id, projectTitle));
              } else {
                dataDispatch(actions.addHabit(hasId, projectTitle));
            }
            }
            setProjectTitle("");
            uiDispatch(actions.toggleShowOverlay(false, null, null));
          }}>
          {addOrEdit}
        </button>
      </div>
  );
}

const ColorOverlay: React.FC = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-md flex items-center justify-center flex-col">
      <p className="text-gray-200">Change Habit Color</p>
      <div className="flex">
        <ColorDiv color="gray-300" />
        <ColorDiv color="red-400" />
        <ColorDiv color="yellow-400" />
      </div>
      <div className="flex">
        <ColorDiv color="green-500" />
        <ColorDiv color="blue-400" />
        <ColorDiv color="indigo-500" />
      </div>
      <div className="flex">
        <ColorDiv color="purple-400" />
        <ColorDiv color="pink-400" />
        <ColorDiv color="gray-50" />
      </div>
    </div>
  );
}

const ColorDiv: React.FC<{color: ColorType}> = ({ color }) => {
  const {dataDispatch} = useContext(DataStore);
  const {UiState, uiDispatch} = useContext(UiStore);

  const setHabitColor = useCallback(() => {
    dataDispatch(actions.editHabit(UiState.showOverlay.id, undefined, color));
    uiDispatch(actions.toggleShowOverlay(false, null, null));
  },[dataDispatch,uiDispatch, UiState, color]);

  return (
    <div
      className={`m-1 h-10 w-10 rounded-full bg-${color} cursor-pointer`}
      onClick={setHabitColor}
      ></div>
  );
};

export default Habits;
