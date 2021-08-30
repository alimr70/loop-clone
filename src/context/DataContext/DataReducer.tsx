import { ActionType, DataStateType, HabitInterface } from "../../interfaces";

const checkWorkDayCell = (state: DataStateType, habitId: string, cellDate: string) => {
  const foundHabit = state.habitsData.find(habit => habit.id === habitId);
  let index = state.habitsData.indexOf(foundHabit!);
  let newHabitsData = state.habitsData.filter(habit => habit.id !== foundHabit!.id);

  foundHabit!.doneDates.push(cellDate);

  newHabitsData.splice(index, 0, foundHabit!);
  let newState = {...state, habitsData:newHabitsData}
  return newState;
}

const unCheckWorkDayCell = (state: DataStateType, habitId: string, cellDate: string) => {
  const foundHabit = state.habitsData.find(habit => habit.id === habitId);
  let index = state.habitsData.indexOf(foundHabit!);
  let newHabitsData = state.habitsData.filter(habit => habit.id !== foundHabit!.id);

  foundHabit!.doneDates.splice(foundHabit!.doneDates.indexOf(cellDate),1);

  newHabitsData.splice(index, 0, foundHabit!);
  let newState = {...state, habitsData:newHabitsData}
  return newState;
}

const addHabit = (state: DataStateType, id: string, title: string) => {
  const newHabit: HabitInterface = {
    id,
    title,
    doneDates:[]
  }
  
  let newState = {...state, habitsData: [...state.habitsData, newHabit]};
  
  return newState;
}

const DataReducer = (state: DataStateType, action: ActionType): DataStateType => {
  switch (action.type) {
    case "CHECK_WORKDAY_CELL":
      return checkWorkDayCell(state, action.payload.habitId!, action.payload.date!);

    case "UNCHECK_WORKDAY_CELL":
    return unCheckWorkDayCell(state, action.payload.habitId!, action.payload.date!);

    case "ADD_HABIT":
      return addHabit(state, action.payload.id!, action.payload.title!);

    default:
      return state;
  }
};

export default DataReducer;