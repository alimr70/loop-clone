import { useContext } from "react";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";
import { Icon } from "../utils & smaller components ";

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

const NormalHeader: React.FC = () => {
  const { uiDispatch } = useContext(UiStore);
  return (
    <div className="w-full max-w-xl my-2 flex items-center justify-between">
      <h2 className="ml-2 text-2xl font-bold text-gray-300">Habits</h2>

      <div className="flex items-center">
        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            uiDispatch(actions.toggleShowOverlay(true, null, "edit"));
          }}>
          <Icon iconName="plus" />
        </div>

        <div className="p-2 cursor-pointer">
        <Icon iconName="filter" />
        </div>

        <div className="p-2 cursor-pointer">
        <Icon iconName="menu" />
        </div>
      </div>
    </div>
  );
};

const SelctedHabitHeader: React.FC = () => {
  const { UiState, uiDispatch } = useContext(UiStore);

  return (
    <div className="w-full max-w-xl py-2 bg-gray-600 flex items-center justify-between">
      <div
        className="ml-2 p-2 cursor-pointer"
        onClick={() => {
          uiDispatch(actions.toggleHabitFocus(false, null, null));
        }}>
        <Icon iconName="back" />
      </div>

      <div className="flex items-center">
        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            uiDispatch(actions.toggleShowOverlay(true, null, "edit"));
          }}>
          <Icon iconName="edit" />
        </div>

        <div className="p-2 cursor-pointer"
          onClick={() => {
            uiDispatch(actions.toggleShowOverlay(true, UiState.selectedHabitFocus.id, "color"));
          }}>
        <Icon iconName="color" />
        </div>

        <div className="p-2 cursor-pointer">
        <Icon iconName="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
