/* -------------------------------------------------------------------------- */
/*                                DATA ACTIONS                                */
/* -------------------------------------------------------------------------- */

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

export const editHabit = (id: string, title: string) => {
  return {
    type: "EDIT_HABIT",
    payload: {
      id,
      title
    }
  }
}

/* -------------------------------------------------------------------------- */
/*                                 UI ACTIONS                                 */
/* -------------------------------------------------------------------------- */

export const toggleShowAddHabitOverlay = (show: boolean, id: string | null) => {
  return {
    type: "TOGGLE_SHOW_ADD_HABIT_OVERLAY",
    payload: {
      show,
      id
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