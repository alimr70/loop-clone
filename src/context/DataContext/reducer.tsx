import { ActionType, DataStateType } from "../../interfaces";

const checkWorkDayCell = (state: DataStateType, habitId: string, cellDate: string) => {
  const foundHabit = state.find(habit => habit.id === habitId);
  let newState = state.filter(habit => habit.id !== foundHabit!.id);

  foundHabit!.doneDates.find(date => date === cellDate)
    ?foundHabit!.doneDates.filter(date => date !== cellDate)
    :foundHabit!.doneDates.push(cellDate);

  newState.push(foundHabit!);
  return newState;
}

const reducer = (state: DataStateType, action: ActionType): DataStateType => {
  switch (action.type) {
    case "checkWorkDayCell":
      return checkWorkDayCell(state, action.payload.habitId!, action.payload.date!);

    default:
      return state;
  }
};

export default reducer;
