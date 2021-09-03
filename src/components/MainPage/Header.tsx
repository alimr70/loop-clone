import { useContext } from "react";
import { UiStore } from "../../context/UiContext/UiContext";
import * as actions from "../../context/actions";
import { Icon, MenuBtn, MenuItem } from "../utils & smaller components ";
import { DataStore } from "../../context/DataContext/DataContext";

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
  const { UiState, uiDispatch } = useContext(UiStore);

  const hideCompleted = () => {
    uiDispatch(actions.toggleHideCompleted());
  }

  const hideArchived = () => {
    uiDispatch(actions.toggleHideArchived());
  }

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

        <MenuBtn iconName="filter">
          <MenuItem title="Hide Completed" onClickFn={hideCompleted}>
            <input type="checkbox" name="hideCompleted" id="hideCompleted" checked={UiState.hideCompleted} />
          </MenuItem>
          <MenuItem title="Hide Archived" onClickFn={hideArchived}>
            <input type="checkbox" name="hideCompleted" id="hideCompleted" checked={UiState.hideArchived} />
          </MenuItem>
        </MenuBtn>

        <MenuBtn iconName="menu">
          <MenuItem title="Dark theme" onClickFn={()=>{return;}} />
          <MenuItem title="Settings" onClickFn={()=>{return;}} />
        </MenuBtn>
      </div>
    </div>
  );
};

const SelctedHabitHeader: React.FC = () => {
  const { UiState, uiDispatch } = useContext(UiStore);
  const {dataDispatch} = useContext(DataStore);

  const deleteHabit = () => {
    dataDispatch(actions.deleteHabit(UiState.selectedHabitFocus.id));
    uiDispatch(actions.toggleHabitFocus(false, null, null));
  }

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

        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            uiDispatch(
              actions.toggleShowOverlay(
                true,
                UiState.selectedHabitFocus.id,
                "color"
              )
            );
          }}>
          <Icon iconName="color" />
        </div>

        <MenuBtn iconName="menu">
          <MenuItem title="Delete Habit" onClickFn={deleteHabit} />
          <MenuItem title="Archive Habit" onClickFn={()=>{return;}} />
        </MenuBtn>
      </div>
    </div>
  );
};

export default Header;
