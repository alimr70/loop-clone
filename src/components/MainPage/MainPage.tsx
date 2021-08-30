import { useContext, useRef, useState } from "react";
import Header from "./Header";
import MainLayout from "./MainLayout";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";
import { nanoid } from "nanoid";
import { DataStore } from "../../context/DataContext/DataContext";

const AddHabit = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const {dataDispatch} = useContext(DataStore);
  const { UiState, uiDispatch } = useContext(UiStore);
  const { showAddHabitOverlay, selectedHabitFocus } = UiState;
  const [projectTitle, setProjectTitle] = useState("");

  const showOrNot = showAddHabitOverlay.show ? "" : "hidden";
  const hasId = showAddHabitOverlay.id ? showAddHabitOverlay.id : nanoid();
  const addOrEdit = selectedHabitFocus.id ? "Edit" : "Add";
  
  return (
    <div
      className={`${showOrNot} absolute w-full h-full bg-black bg-opacity-70 flex items-center justify-center`}
      // id="bg"
      ref={bgRef}
      onClick={(e): void => {
        if (e.target === bgRef.current) {
          uiDispatch(actions.toggleShowAddHabitOverlay(false, null));
        }
      }}>
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
            uiDispatch(actions.toggleShowAddHabitOverlay(false, null));
          }}>
          {addOrEdit}
        </button>
      </div>
    </div>
  );
};

const MainPage: React.FC = () => {
  return (
    <>
      <AddHabit />
      <Header />
      <MainLayout />
    </>
  );
};

export default MainPage;
