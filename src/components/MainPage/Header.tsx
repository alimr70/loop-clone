import { useContext } from "react";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";

const Header: React.FC = () => {
  const { UiState, dispatch } = useContext(UiStore);

  return (
    <header>
      <nav className="flex justify-center">
        <div className="w-full max-w-xl my-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-300">Habits</h2>

          <div className="flex items-center">
            <div
              className="p-2 cursor-pointer"
              onClick={() => {
                dispatch(actions.toggleShowAddHabitOverlay(true, null));
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
      </nav>
    </header>
  );
};

export default Header;
