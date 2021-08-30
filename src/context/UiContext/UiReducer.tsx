import { ActionType, UiStateInterface } from "../../interfaces";

const toggleShowAddHabitOverlay = (state:UiStateInterface, show:boolean, id:string|null) => {
  return {...state, showAddHabitOverlay: {show, id}}
}

const toggleHabitFocus = (state:UiStateInterface, focus:boolean, id:string|null, title:string|null) => {
  return {...state, selectedHabitFocus: {focus, id, title}}
}

const UiReducer = (state: UiStateInterface, action: ActionType): UiStateInterface => {
  switch (action.type) {
    case "TOGGLE_SHOW_ADD_HABIT_OVERLAY":
      return toggleShowAddHabitOverlay(state, action.payload.show!, action.payload.id!);

    case "TOGGLE_HABIT_FOCUS":
      return toggleHabitFocus(state, action.payload.focus!, action.payload.id!, action.payload.title!);

    default:
      return state;
  }
};

export default UiReducer;
