export const checkWorkDayCell = (habitId: string, date: number) => {
  return {
    type: "checkWorkDayCell",
    payload: { habitId, date },
  };
}