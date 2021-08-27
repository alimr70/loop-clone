import { ActionType, UiStateInterface } from "../../interfaces";

const toggleShowAddHabitOverlay = (state:UiStateInterface, show:boolean, id:string|null) => {
  return {...state, showAddHabitOverlay: {show, id}}
}

const UiReducer = (state: UiStateInterface, action: ActionType): UiStateInterface => {
  switch (action.type) {
    case "TOGGLE_SHOW_ADD_HABIT_OVERLAY":
      return toggleShowAddHabitOverlay(state, action.payload.show!, action.payload.id!);

    default:
      return state;
  }
};

export default UiReducer;
