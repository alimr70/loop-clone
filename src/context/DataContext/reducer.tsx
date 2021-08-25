import { ActionType, DataStateType } from "../../interfaces";

const checkWorkDayCell = (state: DataStateType, habitId: string, cellDate: string) => {
  const foundHabit = state.habitsData.find(habit => habit.id === habitId);
  let newHabitsData = state.habitsData.filter(habit => habit.id !== foundHabit!.id);

  foundHabit!.doneDates.find(date => date === cellDate)
    ?foundHabit!.doneDates.splice(foundHabit!.doneDates.indexOf(cellDate),1)
    :foundHabit!.doneDates.push(cellDate);

  newHabitsData.push(foundHabit!);
  let newState = {...state, habitsdata:newHabitsData}
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
