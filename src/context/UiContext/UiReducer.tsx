import { ActionType, UiStateInterface } from "../../interfaces";

const toggleShowOverlay = (state:UiStateInterface, show:boolean, id:string|null, type:"edit" | "color" | null) => {
  return {...state, showOverlay: {show, id, type}}
}

const toggleHabitFocus = (state:UiStateInterface, focus:boolean, id:string|null, title:string|null) => {
  return {...state, selectedHabitFocus: {focus, id, title}}
}

const UiReducer = (state: UiStateInterface, action: ActionType): UiStateInterface => {
  switch (action.type) {
    case "TOGGLE_SHOW_OVERLAY":
      return toggleShowOverlay(state, action.payload.show!, action.payload.id!, action.payload.overlayType!);

    case "TOGGLE_HABIT_FOCUS":
      return toggleHabitFocus(state, action.payload.focus!, action.payload.id!, action.payload.title!);

    default:
      return state;
  }
};

export default UiReducer;
