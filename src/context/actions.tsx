export const checkWorkDayCell = (habitId: string, date: string) => {
  return {
    type: "checkWorkDayCell",
    payload: { habitId, date },
  };
}