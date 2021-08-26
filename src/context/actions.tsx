export const checkWorkDayCell = (habitId: string, date: string) => {
  return {
    type: "checkWorkDayCell",
    payload: { habitId, date },
  };
}

export const unCheckWorkDayCell = (habitId: string, date: string) => {
  return {
    type: "unCheckWorkDayCell",
    payload: { habitId, date },
  };
}