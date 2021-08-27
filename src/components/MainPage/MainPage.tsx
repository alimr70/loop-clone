import { useContext, useRef, useState } from "react";
import Header from "./Header";
import MainLayout from "./MainLayout";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";
import { nanoid } from "nanoid";

const AddHabit = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const { UiState, dispatch } = useContext(UiStore);
  const { showAddHabitOverlay } = UiState;
  const [projectTitle, setProjectTitle] = useState("");

  const showOrNot = showAddHabitOverlay.show ? "" : "hidden";
  const hasId = showAddHabitOverlay.id ? showAddHabitOverlay.id : nanoid(5);
  return (
    <div
      className={`${showOrNot} absolute w-full h-full bg-black bg-opacity-70 flex items-center justify-center`}
      // id="bg"
      ref={bgRef}
      onClick={(e): void => {
        if (e.target === bgRef.current) {
          dispatch(actions.toggleShowAddHabitOverlay(false,null));
        }
      }}>
      <div className="bg-gray-800 p-5 rounded-md flex items-center justify-center flex-col">
        <p className="my-2">Add New Habit</p>
        <input
          className="my-1"
          type="text"
          name="addProject"
          id="addProcject"
          value={projectTitle}
          onChange={(e) => {
            setProjectTitle(e.target.value);
          }}
        />
        <button
          className="bg-green-500 text-gray-100 my-2 px-2 rounded-md"
          onClick={() => {
            if (/\S/.test(projectTitle)) {
              dispatch(
                // addProjcet({
                //   id: hasId,
                //   title: projectTitle,
                //   workingMinutes: 0,
                // })
              );
              dispatch(
                // showMsg({
                //   type: "success",
                //   msg: "Project saved 👍",
                // })
              );
            } else {
              dispatch(
                // showMsg({
                //   type: "error",
                //   msg: "Couldn't save project: Please write a title for project",
                // })
              );
            }
            setProjectTitle("");
            dispatch(actions.toggleShowAddHabitOverlay(false, null));
          }}>
          Add
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
