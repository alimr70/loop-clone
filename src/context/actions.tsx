/* -------------------------------------------------------------------------- */
/*                                DATA ACTIONS                                */
/* -------------------------------------------------------------------------- */

import { ColorType } from "../interfaces";

export const checkWorkDayCell = (habitId: string, date: string) => {
  return {
    type: "CHECK_WORKDAY_CELL",
    payload: { habitId, date },
  };
}

export const unCheckWorkDayCell = (habitId: string, date: string) => {
  return {
    type: "UNCHECK_WORKDAY_CELL",
    payload: { habitId, date },
  };
}

export const addHabit = (id: string, title: string) => {
  return {
    type: "ADD_HABIT",
    payload: {
      id,
      title
    }
  }
}

export const editHabit = (id: string, title?: string, color?: ColorType) => {
  return {
    type: "EDIT_HABIT",
    payload: {
      id,
      title,
      color
    }
  }
}

export const deleteHabit = (habitId: string) => {
  return {
    type: "DELETE_HABIT",
    payload: {
      habitId
    }
  }
}

/* -------------------------------------------------------------------------- */
/*                                 UI ACTIONS                                 */
/* -------------------------------------------------------------------------- */

export const toggleShowOverlay = (show: boolean, id: string | null, overlayType:"edit" | "color" | null) => {
  return {
    type: "TOGGLE_SHOW_OVERLAY",
    payload: {
      show,
      id,
      overlayType
    }
  }
}

export const toggleHabitFocus = (focus: boolean, id: string | null, title: string | null) => {
  return {
    type: "TOGGLE_HABIT_FOCUS",
    payload: {
      focus,
      id,
      title
    }
  }
}

export const toggleHideCompleted = () => {
  console.log("TOGGLE_HIDE_COMPLETED");
  return {
    type: "TOGGLE_HIDE_COMPLETED"
  }
}

export const toggleHideArchived = () => {
  console.log("TOGGLE_HIDE_ARCHIVED");
  return {
    type: "TOGGLE_HIDE_ARCHIVED"
  }
}