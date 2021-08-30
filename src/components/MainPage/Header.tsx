import { useContext } from "react";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";

const NormalHeader: React.FC = () => {
  const { uiDispatch } = useContext(UiStore);
  return (
    <div className="w-full max-w-xl my-2 flex items-center justify-between">
      <h2 className="ml-2 text-2xl font-bold text-gray-300">Habits</h2>

      <div className="flex items-center">
        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            uiDispatch(actions.toggleShowAddHabitOverlay(true, null));
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const SelctedHabitHeader: React.FC = () => {
  const {uiDispatch} = useContext(UiStore);

  return (
    <div className="w-full max-w-xl py-2 bg-gray-600 flex items-center justify-between">
      <div className="ml-2 p-2 cursor-pointer"
        onClick = {()=> {
          uiDispatch(actions.toggleHabitFocus(false, null, null));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex items-center">
        <div className="p-2 cursor-pointer"
          onClick = {() => {
            uiDispatch(actions.toggleShowAddHabitOverlay(true, null));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>

        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const { UiState } = useContext(UiStore);
  const { selectedHabitFocus } = UiState;

  return (
    <header>
      <nav className="flex justify-center">
        {selectedHabitFocus.focus ? <SelctedHabitHeader /> : <NormalHeader />}
      </nav>
    </header>
  );
};

export default Header;
