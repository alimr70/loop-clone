import { ActionType, UiStateInterface } from "../../interfaces";

const toggleShowOverlay = (state:UiStateInterface, show:boolean, id:string | null, type:"edit" | "color" | null) => {
  return {...state, showOverlay: {show, id, type}}
}

const toggleHabitFocus = (state:UiStateInterface, focus:boolean, id:string | null, title:string) => {
  return {...state, selectedHabitFocus: {focus, id, title}}
}

const toggleHideCompleted = (state: UiStateInterface) => {
  return {...state, hideCompleted: !state.hideCompleted};
}

const toggleHideArchived = (state: UiStateInterface) => {
  return {...state, hideArchived: !state.hideArchived};
}

const UiReducer = (state: UiStateInterface, action: ActionType): UiStateInterface => {
  switch (action.type) {
    case "TOGGLE_SHOW_OVERLAY":
      return toggleShowOverlay(state, action.payload.show!, action.payload.id!, action.payload.overlayType!);

    case "TOGGLE_HABIT_FOCUS":
      return toggleHabitFocus(state, action.payload.focus!, action.payload.id!, action.payload.title!);

    case "TOGGLE_HIDE_COMPLETED":
      return toggleHideCompleted(state);
      
    case "TOGGLE_HIDE_ARCHIVED":
      return toggleHideArchived(state);

    default:
      return state;
  }
};

export default UiReducer;
